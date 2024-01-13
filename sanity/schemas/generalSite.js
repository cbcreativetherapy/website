export default {
  name: 'generalSite',
  type: 'document',
  title: 'General Site Content',
  fields: [
    {
      name: 'navBannerEnabled',
      type: 'boolean',
      title: "Nav Banner Enabled?",
      description: "Show or Hide the Nav Banner",
    },
    {
      name: 'navBannerText',
      type: 'string',
      title: 'Nav Banner Text',
      description:
        'Text that goes into the nav banner that appears on all pages.',
    },
    {
      name: 'navBannerLink',
      type: 'url',
      title: 'Nav Banner Link',
      description: 'Link attached to the Nav Banner. Leave blank to just display text.',
    },
    {
      name: 'footerSocialLinks',
      type: 'array',
      title: 'Footer Social Links',
      description: 'List of social media links that appear in the footer. Please include the platform name for accessibility support. Try not to add too many links here, may cause weird styling.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'socialMediaLink' }]
        },
      ],
    },
  ],
};