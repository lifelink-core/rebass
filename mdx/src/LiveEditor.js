import React from 'react'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'
import { Box } from 'rebass'
import { color, borderColor } from 'styled-system'
import styled from 'styled-components'
import { MDXTag } from '@mdx-js/tag'
import mdx from '@mdx-js/mdx'

const removeExport = str => {
  return str.replace(/^(\s)*export default \({components}\) =>/, '')
}

// const transformCode = src => `<React.Fragment>${src}</React.Fragment>`
const transformCode = mode => {
  switch (mode) {
    case 'mdx':
      return str => removeExport(mdx.sync(str))
    default:
      return str => `<React.Fragment>${str}</React.Fragment>`
  }
}

const mdxScope = {
  MDXTag
}

const Preview = styled(LivePreview)([], {
  padding: '16px',
  border: '1px solid',
  borderRadius: '2px 2px 0 0',
}, borderColor)
Preview.defaultProps = {
  borderColor: 'gray'
}

const Editor = styled(LiveEditor)([], {
  fontFamily: 'Menlo, monospace',
  fontSize: '13px',
  margin: 0,
  padding: '16px',
  borderRadius: '0 0 2px 2px',
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px #6cf',
  }
}, color)
Editor.defaultProps = {
  bg: 'gray'
}

const Err = styled(LiveError)([], {
  fontFamily: 'Menlo, monospace',
  fontSize: '13px',
  padding: '8px',
  color: 'white',
  backgroundColor: 'red'
})

export default withMDXComponents(({
  code,
  scope,
  components,
  mode = 'jsx',
  render
}) => (
  <Box mb={4}>
    <pre>{mode}</pre>
    <LiveProvider
      code={code}
      scope={{
        ...mdxScope,
        ...components,
        ...scope,
        components,
      }}
      mountStylesheet={false}
      transformCode={transformCode(mode)}>
      {typeof render === 'function' ? (
        render({
          code,
          scope: {
            ...components,
            ...scope
          }
        })
      ) : (
        <React.Fragment>
          <Preview />
          <Editor />
          <Err />
        </React.Fragment>
      )}
    </LiveProvider>
  </Box>
))
