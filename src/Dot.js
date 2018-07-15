import sys from 'system-components'
import { themeGet } from 'styled-system'

export const Dot = sys({
  is: 'button',
  m: 0,
  p: 0,
  size: 16,
  bg: 'darken',
  borderRadius: 99999,
  border: 4,
  borderColor: 'transparent',
}, {
  appearance: 'none',
  backgroundClip: 'padding-box'
}, props => ({
  '&:focus': {
    backgroundColor: themeGet('colors.blue', 'blue')(props)
  },
  '&:hover': {
    backgroundColor: themeGet('colors.blue', 'blue')(props)
  },
  '&:disabled': {
    opacity: 1/4
  }
}),
  'size',
  'space',
  'color'
)

Dot.displayName = 'Dot'

export default Dot
