export default {
  name: 'ourServices',
  title: 'Our Services Page',
  type: 'document',
  fieldsets: [
    {
      name: 'heroContent',
      title: 'Hero Content',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
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
      fieldset: 'heroContent',
      description: 'Main title for the page.',
    },
    {
      name: 'heroParagraph',
      title: 'Hero Paragraph',
      type: 'text',
      fieldset: 'heroContent',
      description: 'Text appears under the main title for the page.',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference',
      to: [{ type: 'imageBlock' }],
      fieldset: 'heroContent',
    },
    {
      name: 'sectionsArray',
      title: 'Sections Array',
      type: 'contentBlockArray',
    },
    {
      name: 'modalities',
      title: 'Modalities Section',
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
