import path from 'path'

const req = require.context('../../docs', false, /\.md$/)

const order = [
  'getting-started',
  'props',
  'grid-system',
  'theming',
  'extending',
  'server-side-rendering',
  'components',
]

const docs = req.keys()
  .filter(key => !/README/.test(key))
  .map(key => {
    const name = path.basename(key, path.extname(key))

    // testing bundle splitting
    const mod = req(key)
    // const mod = import(key)
    const Component = mod.default || mod

    return {
      key,
      name,
      path: '/' + name,
      module: mod,
      Component,
      // ...Component.defaultProps,
    }
  })
  .sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name))

export default docs
