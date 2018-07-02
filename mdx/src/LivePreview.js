import React from 'react'
import {
  LiveProvider,
  LivePreview,
  LiveError
} from 'react-live'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'
import { MDXTag } from '@mdx-js/tag'
import mdx from '@mdx-js/mdx'
import { Box } from 'rebass'

const mdxScope = {
  MDXTag
}

const transformCode = mode => {
  switch (mode) {
    case 'mdx':
      return str => mdx.sync(str)
    default:
      return str => `<React.Fragment>${str}</React.Fragment>`
  }
}

export default withMDXComponents(({
  code,
  scope,
  components,
  mode = 'jsx'
}) => (
  <Box mb={4}>
    <LiveProvider
      code={code}
      scope={{
        ...components,
        ...scope,
        ...mdxScope
      }}
      mountStylesheet={false}
      transformCode={transformCode(mode)}>
      <LivePreview />
      <LiveError />
    </LiveProvider>
  </Box>
))
