import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'rayyan/voumy',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
        image: fields.image({
          label: 'Upload Image',
          directory: 'src/assets/images/posts',
          publicPath: '../../assets/images/posts/',
        })
      },
    }),
    journal: collection({
      label: 'Journals',
      slugField: 'title',
      path: 'src/content/journals/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/journals',
              publicPath: '../../assets/images/journals/',
            },
          },
        }),
      },
    }),
  },
});
