import React from 'react'
import * as Rebass from 'rebass'
import { Link } from 'ok-cli'
import * as Refunk from 'refunk'
import { MDXProvider } from '@mdx-js/tag'

import RebassMDX, {
  code,
  pre
} from '../src'

const link = ({
  href,
  ...props
}) => /^https?\:\/\//.test(href)
  ? <Rebass.Link {...props} href={href} />
  : (
    <Rebass.Link
      {...props}
      is={Link}
      to={href}
    />
  )

const components = {
  code,
  pre,
  ...Rebass,
  a: link
}

const toggleProvider = state => ({
  ComponentProvider: state.ComponentProvider === RebassMDX
    ? MDXProvider
    : RebassMDX
})

export default props =>
  <Refunk.Provider ComponentProvider={MDXProvider}>
    <Refunk.Consumer>
      {({ ComponentProvider, update }) => (
        <ComponentProvider components={components}>
          <React.Fragment>
            <Rebass.Container>
              {props.children}
              <button onClick={e => update(toggleProvider)}>
                {ComponentProvider === RebassMDX ? 'RebassMDX' : 'MDXProvider'}
              </button>
            </Rebass.Container>
          </React.Fragment>
        </ComponentProvider>
      )}
    </Refunk.Consumer>
  </Refunk.Provider>
