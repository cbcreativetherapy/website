export default {
  name: 'generalGalleryPage',
  type: 'document',
  title: 'General Gallery Page',
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title',
      description: 'Main title of this page',
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'string',
      description:
        'Additional text providing a disclaimer and context for the gallery page.',
    },
    {
      name: 'metaContent',
      type: 'metaContent',
      title: 'Meta Content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaBannerReference',
      title: 'Call to Action Banner',
      type: 'reference',
      to: [{ type: 'ctaBanner' }],
    },
  ],
};
