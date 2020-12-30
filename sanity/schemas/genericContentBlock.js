export default {
  name: 'genericContentBlock',
  title: 'Generic Content Block',
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
    {
      name: 'image',
      title: 'Image',
      type: 'reference',
      to: [{ type: 'imageBlock' }],
      description:
        'Images only connected in certain places, may not appear if an image is not already here.',
    },
  ],
};
