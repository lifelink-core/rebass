const palx = require('palx')

const breakpoints = [
  32,
  48,
  64,
  80
]

const space = [
  0,
  4,
  8,
  16,
  32,
  64,
  128,
]

const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48,
  64,
  72,
  96
]

const weights = [
  400,
  700
]

const palette = palx('#07c')

const flattened = Object.keys(palette)
  .reduce((a, key) => {
    const value = palette[key]
    if (Array.isArray(value)) {
      a[key] = value[5]
      value.forEach((val, i) => {
        a[key + i] = val
      })
    } else {
      a[key] = value
    }
    return a
  }, {})

// todo: flatten

const colors = Object.assign({}, flattened, {
  black: '#000',
  white: '#fff'
})

const radii = {
  radius: 4
}
const font = `-apple-system, BlinkMacSystemFont, sans-serif`
const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

const boxShadows = [
  `inset 0 0 0 1px ${colors.gray2}, 0 0 4px ${colors.gray2}`,
]

module.exports = {
  breakpoints,
  space,
  fontSizes,
  weights,
  font,
  monospace,
  colors,
  radii,
}
