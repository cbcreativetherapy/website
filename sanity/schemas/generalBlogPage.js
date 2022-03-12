export default {
  name: 'generalBlogPage',
  type: 'document',
  title: 'General Blog Page',
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title',
      description: 'Main title of this page',
    },
    {
      name: 'categoryHeading',
      type: 'string',
      title: 'Category Section Heading',
      description: 'This is the heading above the blog categories list',
    },
    {
      name: 'metaContent',
      type: 'metaContent',
      title: 'Meta Content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blogIsPublic',
      type: 'boolean',
      title: 'Make Blog Public',
      description:
        'Turn this on to show the blog on your website. This will reveal the blog in the menu & footer',
    },
    {
      name: 'ctaBannerReference',
      title: 'Call to Action Banner',
      type: 'reference',
      to: [{ type: 'ctaBanner' }],
    },
  ],
};
