export default {
  name: 'faq',
  title: 'FAQ Page',
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
      name: 'questionsArray',
      title: 'List of Questions',
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
