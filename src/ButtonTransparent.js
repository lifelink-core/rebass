import sys from 'system-components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonTransparent = sys({
  is: Button,
  bg: 'transparent',
  color: 'inherit',
}, props => ({
  '&:focus': {
    outline: 'none',
    boxShadow: 'none',
    color: themeGet('colors.blue', 'blue')(props),
  }
}))

ButtonTransparent.displayName = 'ButtonTransparent'

export default ButtonTransparent
