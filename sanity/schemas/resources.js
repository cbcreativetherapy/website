export default {
  name: 'resources',
  title: 'Resources Page',
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
      name: 'heroParagraph',
      title: 'Hero Paragraph',
      type: 'text',
      description: 'Text appears under the main title for the page.',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference',
      to: [{ type: 'imageBlock' }],
    },
    {
      name: 'sectionsArray',
      title: 'Sections Array',
      type: 'contentBlockArray',
    },
    {
      name: 'ctaBannerReference',
      title: 'Call to Action Banner Reference',
      type: 'reference',
      to: [{ type: 'ctaBanner' }],
    },
  ],
};
