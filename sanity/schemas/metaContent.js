export default {
  name: 'metaContent',
  title: 'Meta Content',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Meta Image',
      type: 'reference',
      to: [{ type: 'imageBlock' }],
      description:
        'This is the image that will show up when someone shares your website using a link. This can be the same image over and over again.',
    },
  ],
};
