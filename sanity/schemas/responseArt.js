export default {
  name: 'responseArt',
  title: 'Response Art',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Response Art Name',
      type: 'string',
      description:
        'Name of the image, will appear as the main heading on its own page and used to generate the link',
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(100)
          .warning(
            'Titles must be more than 5 characters and less than 100 characters'
          ),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Generate link for this image, required',
      validation: (Rule) =>
        Rule.required().error(
          'Slugs are required, please click the generate button'
        ),
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description:
        'Include a brief description of the art piece that will appear under the date.',
    },
    {
      name: 'sessionDate',
      title: 'Session Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
    },
    {
      name: 'image',
      title: 'Response Art Drawing',
      type: 'reference',
      to: [{ type: 'imageBlock' }],
      description:
        'Upload the photo/scan of the response art drawing. Ideal resolution is 1200px by 800px, smaller images may appear pixelated on the site.',
    },
  ],
  preview: {
    select: {
      name: 'name',
      sessionDate: 'sessionDate',
      image: 'image.imageFile',
    },
    prepare: (fields) => ({
      title: `${fields.name} from ${fields.sessionDate}`,
      media: fields.image,
    }),
  },
};
