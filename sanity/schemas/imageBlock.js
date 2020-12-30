export default {
  name: 'imageBlock',
  title: 'Image Block',
  type: 'document',
  fields: [
    {
      name: 'imageTitle',
      title: 'Image Title',
      type: 'string',
      description: 'Title of the image to help sort images in the database',
    },
    {
      name: 'imageFile',
      title: 'Image File',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageAltText',
      title: 'Image Alt Text',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
