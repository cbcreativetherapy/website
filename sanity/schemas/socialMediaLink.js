export default {
  name: 'socialMediaLink',
  title: 'Social Media Link',
  type: 'document',
  fields: [
    {
      name: 'platformName',
      title: 'Social Media Platform Name',
      type: 'string',
    },
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    },
  ],
};