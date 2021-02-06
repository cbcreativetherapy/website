export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'metaContent',
      title: 'Meta Content',
      type: 'metaContent',
    },
    {
      name: 'h1Heading',
      title: 'H1 Heading',
      type: 'string',
      description: 'Main title for the page.',
    },
    {
      name: 'aboutParagraph',
      title: 'About Paragraph',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'About paragraph that wraps around the headshot.',
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'reference',
      to: [{ type: 'imageBlock' }],
    },
    {
      name: 'professionalAffiliations',
      title: 'Professional Affiliations',
      type: 'genericContentBlock',
    },
    {
      name: 'ctaBannerReference',
      title: 'Call to Action Banner Reference',
      type: 'reference',
      to: [{ type: 'ctaBanner' }],
    },
  ],
};
