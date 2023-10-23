export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Sub Title',
    },
    {
      title: 'slug',
      name: 'Slug',
      type: 'slug',
    },
  ],
}
