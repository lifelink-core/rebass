
import React from 'react'
import Shallow from 'react-test-renderer/shallow'
import expect from 'expect'
import { Dropdown, Base } from '../src'

const renderer = new Shallow()

describe('Dropdown', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Dropdown />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Dropdown')
  })

  it('should have position relative', () => {
    expect(tree.props.baseStyle.position).toEqual('relative')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Dropdown style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})
