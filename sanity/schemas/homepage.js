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
      name: 'sitePreviewArray',
      title: 'Site Preview Blocks',
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
      type: 'image',
      fieldset: 'heroContent',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'altText',
          title: 'Alternative Text',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
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
      name: 'previewContentArray',
      title: 'Preview Content Array',
      type: 'array',
      fieldset: 'sitePreviewArray',
      of: [
        {
          title: 'Preview Content Block',
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'paragraph',
              title: 'Paragraph',
              type: 'text',
              validation: (Rule) => Rule.max(150),
            },
          ],
        },
      ],
    },
    {
      name: 'ctaBannerReference',
      title: 'Call to Action Banner Reference',
      type: 'reference',
      to: [{ type: 'ctaBanner' }],
    },
  ],
};
