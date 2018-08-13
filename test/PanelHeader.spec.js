
import React from 'react'
import Shallow from 'react-test-renderer/shallow'
import expect from 'expect'
import { PanelHeader, Base } from '../src'

const renderer = new Shallow()

describe('PanelHeader', () => {
  let tree

  beforeEach(() => {
    renderer.render(<PanelHeader />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('PanelHeader')
  })

  it('should have default theme', () => {
    expect(tree.props.theme).toEqual('default')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<PanelHeader style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})
