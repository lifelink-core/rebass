import React from 'react'
import sys from 'system-components'
import { style } from 'styled-system'

// todo: alias src prop
const bgImage = style({
  prop: 'image',
  cssProperty: 'backgroundImage',
  getter: n => `url(${n})`
})

const mapProps = Component => ({ src, ...props }) =>
  <Component image={src} {...props} />

export const BackgroundImage = mapProps(sys({
  width: 1,
  ratio: 3/4,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
},
  bgImage,
  'ratio',
  'backgroundSize',
  'backgroundPosition',
  'space',
  'color',
))

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
