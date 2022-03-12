import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'CB Creative Therapy',
    siteUrl: 'https://cbcreativetherapy.ca',
    description:
      'Cassandra Brennan is a Creative Arts Therapist who uses Cognitive Behavioral Therapy, psychotherapy and artistic self-expression to collaborate with her clients in their care.',
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
        host: 'https://cbcreativetherapy.ca',
        sitemap: 'https://cbcreativetherapy.ca/sitemap.xml',
        policy: [{ userAgent: '*', allow: ['*.jpg', '*.js', '*.css'] }],
      },
    },
  ],
};
