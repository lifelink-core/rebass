import React from 'react'
import * as Rebass from 'rebass'
import { heading } from '@compositor/md'
import { Link } from 'react-router-dom'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'
import { photo } from './constants'

const h1 = heading(props =>
  <Rebass.Heading
    is='h1'
    fontSize={5}
    mt={4}
    mb={2}
    {...props}
  />
)

const h2 = heading(props =>
  <Rebass.Heading
    is='h2'
    fontSize={4}
    mt={4}
    mb={2}
    {...props}
  />
)

const h3 = heading(props =>
  <Rebass.Heading
    is='h3'
    fontSize={3}
    mt={3}
    mb={2}
    {...props}
  />
)

const h4 = heading(props =>
  <Rebass.Heading
    is='h4'
    fontSize={2}
    mt={3}
    mb={2}
    {...props}
  />
)

const h5 = heading(props =>
  <Rebass.Heading
    is='h5'
    fontSize={2}
    mt={3}
    mb={2}
    {...props}
  />
)

const h6 = heading(props =>
  <Rebass.Heading
    is='h6'
    fontSize={2}
    mt={3}
    mb={2}
    {...props}
  />
)

const p = props =>
  <Rebass.Text
    {...props}
    mt={1}
    mb={3}
  />

const isRelativeLink = href => /\.md$/.test(href)
const getRelativePath = href => href.replace(/\.md$/, '/')

const a = ({ href, ...props }) => isRelativeLink(href)
  ? (
    <Rebass.Link
      {...props}
      is={Link}
      to={getRelativePath(href)}
      href={undefined}
    />
  ) : (
    <Rebass.Link {...props} href={href} />
  )

const pre = ({
  lang,
  ...props
}) => {
  const code = React.Children.toArray(props.children).join('\n')
  switch (lang) {
    case '.jsx':
      return (
        <LiveProvider
          scope={{
            ...Rebass,
            photo
          }}
          code={code}
          mountStylesheet={false}
          transformCode={src => `<React.Fragment>${src}</React.Fragment>`}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError
            style={{
              color: 'white',
              backgroundColor: 'red'
            }}
          />
        </LiveProvider>
      )
    default:
      return (
        <Rebass.Pre
          {...props}
          p={2}
          my={3}
          bg='#f6f6fc'
        />
      )
  }
}

const code = props =>
  <Rebass.Code
    {...props}
    bg='#f6f6fc'
  />

const blockquote = props =>
  <Rebass.Blockquote
    {...props}
    fontWeight='bold'
    my={3}
  />

const ul = props =>
  <Rebass.Base
    {...props}
    is='ul'
    my={3}
  />

const li = props =>
  <Rebass.Base
    {...props}
    is='li'
    my={3}
  />

export default {
  ...Rebass,
  photo,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  pre, // with codeblock...
  code,
  blockquote,
  ul,
  li,
}
