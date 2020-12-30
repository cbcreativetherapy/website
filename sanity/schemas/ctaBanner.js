export default {
  name: 'ctaBanner',
  title: 'Call to Action Banner',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subHeading',
      title: 'Subheading Paragraph',
      type: 'text',
      description:
        'Optional, leave blank if you do not want it included in the banner',
    },
  ],
};
