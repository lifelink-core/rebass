import sys from 'system-components'
import { themeGet } from 'styled-system'

export const Tab = sys({
  is: 'a',
  fontSize: 1,
  fontWeight: 'bold',
  mr: 3,
  py: 2,
  color: 'inherit',
  borderBottom: 2,
  borderColor: 'transparent',
}, props => ({
  textDecoration: 'none',
  '&:hover': {
    color: themeGet('colors.blue', 'blue')(props)
  }
}))

Tab.displayName = 'Tab'

export default Tab
