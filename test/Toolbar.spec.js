
import React from 'react'
import Shallow from 'react-test-renderer/shallow'
import expect from 'expect'
import { Toolbar, Base } from '../src'

const renderer = new Shallow()

describe('Toolbar', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Toolbar />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Toolbar')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Toolbar style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})
