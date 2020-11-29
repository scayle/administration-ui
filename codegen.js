module.exports = {
  schema: './external/gateway/graph/definition/**/*.graphql',
  documents: './src/api/operations**/*.{ts,tsx}',
  overwrite: true,
  generates: {
    './src/graphql/types.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false
      }
    },
    './src/graphql/graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}
