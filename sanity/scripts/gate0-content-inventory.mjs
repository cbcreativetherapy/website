import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

function loadProjectConfig() {
  const projectId = process.env.SANITY_PROJECT_ID || 'njbf7cxc';
  const dataset = process.env.SANITY_DATASET || 'production';

  if (!projectId || !dataset) {
    throw new Error('Missing project config. Set SANITY_PROJECT_ID and SANITY_DATASET.');
  }

  return {projectId, dataset};
}

async function querySanity({projectId, dataset, token, query, params = {}}) {
  const searchParams = new URLSearchParams();
  searchParams.set('query', query);

  for (const [key, value] of Object.entries(params)) {
    searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?${searchParams.toString()}`;

  const headers = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(url, {headers});
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Query failed (${response.status}): ${body}`);
  }

  const payload = await response.json();
  return payload.result;
}

function toIsoStamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

async function main() {
  const token = process.env.SANITY_READ_TOKEN || process.env.SANITY_TOKEN;
  const {projectId, dataset} = loadProjectConfig();

  const types = await querySanity({
    projectId,
    dataset,
    token,
    query: 'array::unique(*[_type != null]._type) | order(@ asc)',
  });

  const countsByType = {};
  for (const type of types) {
    const count = await querySanity({
      projectId,
      dataset,
      token,
      query: 'count(*[_type == $type])',
      params: {type},
    });
    countsByType[type] = count;
  }

  const criticalDocs = await querySanity({
    projectId,
    dataset,
    token,
    query:
      '*[_type in ["homepage", "generalSite", "generalBlogPage", "generalGalleryPage"]] | order(_updatedAt desc)[0...25]{_id, _type, _createdAt, _updatedAt}',
  });

  const totalDocuments = await querySanity({
    projectId,
    dataset,
    token,
    query: 'count(*[_type != null])',
  });

  const output = {
    generatedAt: new Date().toISOString(),
    projectId,
    dataset,
    totalDocuments,
    countsByType,
    criticalDocs,
  };

  const backupDir = path.join(rootDir, 'backups');
  fs.mkdirSync(backupDir, {recursive: true});

  const outputFile = path.join(backupDir, `baseline-inventory-${toIsoStamp()}.json`);
  fs.writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`, 'utf8');

  console.log(`Baseline inventory written to ${outputFile}`);
  console.log(`Total documents: ${totalDocuments}`);
  console.log(`Document types: ${Object.keys(countsByType).length}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
