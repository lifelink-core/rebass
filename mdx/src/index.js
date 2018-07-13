import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import createScope from '@rebass/markdown'
import { Provider as RebassProvider, Box } from 'rebass'
import LiveEditor from './LiveEditor'
import LivePreview from './LivePreview'

export { default as LiveEditor } from './LiveEditor'
export { default as LivePreview } from './LivePreview'

export const pre = props => props.children
// todo: decouple from Rebass completely
export const code = ({
  children,
  className = '',
  scope,
  ...props
}) => {
  const lang = className.replace(/^language\-/, '')
  const type = lang.charAt(0)
  const code = React.Children.toArray(children).join('\n')

  switch (type) {
    case '.':
      return <LiveEditor code={code} scope={scope} />
    case '!':
      return <LivePreview code={code} scope={scope} />
    default:
      return (
        <Box
          is='pre'
          p={3}
          mt={4}
          mb={4}
          bg='lightgray'
          fontSize={13}
          css={{
            fontFamily: 'Menlo, monospace'
          }}
          children={children}
        />
      )
  }
}

export default class RebassMDXProvider extends React.Component {
  state = {
    components: {}
  }
  static getDerivedStateFromProps = (props, state) => {
    const components = {
        ...createScope(props.props),
        code,
        pre,
        ...props.components
    }
    if (state.components === components) return null
    return { components }
  }

  render () {
    const { theme, children } = this.props
    const { components } = this.state

    return (
      <RebassProvider theme={theme}>
        <MDXProvider components={components}>
          <React.Fragment>
            {this.props.children}
          </React.Fragment>
        </MDXProvider>
      </RebassProvider>
    )
  }
}
