
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { PageHeader, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<PageHeader />)
  inner = wrapper.first().shallow()
})

test('is a header', t => {
  t.true(inner.is('header'))
})

test('has a className', t => {
  t.is(inner.props().className, 'PageHeader')
})

test('accepts custom className props', t => {
  wrapper = shallow(<PageHeader className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'PageHeader foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<PageHeader style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<PageHeader />, {
    context: {
      rebass: {
        PageHeader: {
          marginLeft: 0
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  t.is(inner.props().style.marginLeft, 0)
})

test('style props override context styles', t => {
  wrapper = shallow(
    <PageHeader
      color='blue'
      style={{
      color: 'tomato'
    }} />, {
    context: {
      rebass: {
        Arros: {
          color: 'magenta'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

