export default {
  name: 'blog-post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'postTitle',
      title: 'Post Title',
      type: 'string',
      description: 'Title of your blog post.',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'postTitle',
        maxLength: 100,
      },
    },
    {
      name: 'postTagline',
      title: 'Post Tagline',
      type: 'string',
      description: 'Optional tagline for your blog post.',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      description:
        'Author of the post. Leave blank if the author is Cassandra Brennan.',
    },
    {
      name: 'authorLink',
      title: 'Author Link',
      type: 'url',
      description:
        "Full url to the author's website or social media. Leave blank if the author is Cassandra Brennan.",
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      description:
        'Date that the blog is posted. Does not need to be the same date that you started working on the post. Once set and the post is published, please do not change.',
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
    },
    {
      name: 'heroImage',
      title: 'Blog Hero Image',
      type: 'reference',
      to: [{ type: 'imageBlock' }],
      description:
        'This image is used for the background of the hero on the blog post. It will also be used as the thumbnail associated with the blog post on the /blog page. Ideal resolution is 1200px by 800px, smaller images may appear pixelated on the site.',
    },
    {
      name: 'post',
      title: 'Blog Post',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      description:
        'All of your blog post lives inside of here. You can include images as well.',
    },
  ],
  preview: {
    select: {
      name: 'postTitle',
      date: 'publishDate',
      image: 'heroImage.imageFile',
    },
    prepare: (fields) => ({
      title: `${fields.name} - ${fields.date}`,
      media: fields.image,
    }),
  },
};
