export default {
  name: 'index',
  title: 'Home Page',
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
    {
      name: 'introContent',
      title: 'Introduction Content',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'sitePreviewSection',
      title: 'Site Preview Section',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'h1Heading',
      title: 'H1 Heading',
      type: 'string',
      fieldset: 'heroContent',
      description: 'Main title for the page',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference',
      to: [{ type: 'imageBlock' }],
      fieldset: 'heroContent',
    },
    {
      name: 'introHeading',
      title: 'Introduction Heading',
      type: 'string',
      fieldset: 'introContent',
    },
    {
      name: 'introParagraph',
      title: 'Introduction Paragraph',
      type: 'text',
      fieldset: 'introContent',
    },
    {
      name: 'sitePreviewBlock',
      title: 'Site Preview Block',
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
