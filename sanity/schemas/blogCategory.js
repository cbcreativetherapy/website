export default {
  name: 'blogCategory',
  type: 'document',
  title: 'Blog Category',
  fields: [
    {
      name: 'categoryName',
      type: 'string',
      title: 'Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug',
      options: {
        source: 'categoryName',
      },
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description:
        'Short description of what types of posts should be inside this category',
    },
  ],
};
