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
      type: 'image',
      description:
        'Upload the photo/scan of the response art drawing. Ideal resolution is 1200px by 800px, smaller images may appear pixelated on the site.',
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
  ],
  preview: {
    select: {
      name: 'name',
      sessionDate: 'sessionDate',
      image: 'image',
    },
    prepare: (fields) => ({
      title: `${fields.name} from ${fields.sessionDate}`,
      media: fields.image,
    }),
  },
};