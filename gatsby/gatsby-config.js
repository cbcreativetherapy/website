import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'CB Creative Therapy',
    siteUrl: 'https://cbcreativetherapy.ca',
    description:
      'Cassandra is a Creative Arts Therapist who uses Cognitive Behavioral Therapy, psychotherapy and artistic self-expression to collaborate with her clients in their care.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://junocollege.com',
        sitemap: 'https://junocollege.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: ['*.jpg', '*.js', '*.css'] }],
      },
    },
  ],
};
