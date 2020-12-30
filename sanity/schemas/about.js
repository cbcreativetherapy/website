export default {
  name: 'about',
  title: 'About Page',
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
      name: 'genericSectionsArray',
      title: 'Generic Sections Array',
      type: 'array',
      of: [
        {
          title: 'Generic Section Block',
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
              type: 'array',
              of: [{ type: 'block' }],
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
