import React from 'react'
import PropTypes from 'prop-types'
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

const transformCode = src => `<React.Fragment>${src}</React.Fragment>`

const Preview = styled(LivePreview)([], {
  padding: '16px',
  border: '1px solid',
  borderRadius: '2px 2px 0 0',
}, borderColor)
Preview.defaultProps = {
  borderColor: 'lightgray'
}

const Editor = styled(LiveEditor)([], {
  fontFamily: 'Menlo, monospace',
  fontSize: '13px',
  margin: 0,
  padding: '16px',
  borderRadius: '0 0 2px 2px',
  borderStyle: 'solid',
  borderWidth: '1px',
  '&:focus': {
    outline: 'none',
    // borderColor: 'currentcolor'
    // boxShadow: 'inset 0 0 0 1px #6cf',
  }
}, color, borderColor)
Editor.defaultProps = {
  bg: 'lightgray',
  borderColor: 'lightgray',
}

const Err = styled(LiveError)([], {
  fontFamily: 'Menlo, monospace',
  fontSize: '13px',
  padding: '8px',
  color: 'white',
  backgroundColor: 'red'
})

export default withMDXComponents(class extends React.Component {
  static displayName = 'LiveEditor'

  static propTypes = {
    code: PropTypes.string.isRequired,
    scope: PropTypes.object,
    components: PropTypes.object,
    render: PropTypes.func,
    previewProps: PropTypes.object,
    editorProps: PropTypes.object,
    errorProps: PropTypes.object,
  }

  render () {
    const {
      code,
      scope,
      components,
      render,
      previewProps,
      editorProps,
      errorProps,
    } = this.props
    return (
      <Box mb={4}>
        <LiveProvider
          code={code}
          scope={{ ...components, ...scope }}
          mountStylesheet={false}
          transformCode={transformCode}>
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
              <Preview {...previewProps} />
              <Editor {...editorProps} />
              <Err {...errorProps} />
            </React.Fragment>
          )}
        </LiveProvider>
      </Box>
    )
  }
})
