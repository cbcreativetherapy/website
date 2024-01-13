export default {
  name: 'contact',
  title: 'Contact Page',
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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference',
      to: [{ type: 'imageBlock' }],
    },
    {
      name: 'introParagraph',
      title: 'Introduction Paragraph',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'Introductory paragraph that appears before your contact form.',
    },
    {
      name: 'socialMediaHeading',
      title: 'Social Media Heading',
      type: 'text',
      description:
        'Heading for the social media section below the contact form.',
    },
    {
      name: 'socialMedias',
      type: 'array',
      title: 'Social Medias',
      description:
        'List of social media links that appear in this section, try to limit to two.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'socialMediaLink' }],
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
