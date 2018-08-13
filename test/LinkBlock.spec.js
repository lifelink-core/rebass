
import React from 'react'
import Shallow from 'react-test-renderer/shallow'
import expect from 'expect'
import { LinkBlock, Base } from '../src'

const renderer = new Shallow()

describe('LinkBlock', () => {
  let tree

  beforeEach(() => {
    renderer.render(<LinkBlock />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have a default is props', () => {
    expect(tree.props.is).toEqual('a')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('LinkBlock')
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<LinkBlock style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})
