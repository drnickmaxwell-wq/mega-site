import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc.slug}`,
    },
  },
}));

const Treatment = defineDocumentType(() => ({
  name: 'Treatment',
  filePathPattern: `treatments/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    date: { type: 'date', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/treatments/${doc.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, Treatment],
});
