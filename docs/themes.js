import React from 'react'
import { Link } from 'react-router-dom'
import {
  Provider,
  Box,
  Flex,
  Button,
  ButtonOutline,
  Heading,
  Text,
  Label,
  Input,
  Select,
  Slider,
  Panel,
  BlockLink,
  theme as defaultTheme
} from '../src'

const themes = {
  default: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: defaultTheme.colors.blue
    }
  },
  mono: {
    font: 'mono',
    fonts: {
      mono: '"Roboto Mono", Menlo, monospace',
    },
    colors: {
      black: '#222',
      blue: '#0cf',
      primary: '#0cf',
    }
  },
}

const themeOptions = Object.keys(themes)

export default class Themes extends React.Component {
  static defaultProps = {
    fullWidth: true
  }

  state = {
    themeName: 'default'
  }
  update = fn => this.setState(fn)

  render () {
    const { themeName } = this.state
    const theme = themes[themeName]

    return (
      <Provider
        fontFamily={theme.font}
        theme={theme}>
        <Flex
          px={2}
          py={2}
          color='white'
          bg='black'
          alignItems='center'>
          <BlockLink is={Link} to='/'>
            Rebass
          </BlockLink>
          <Text>
            Theme Demo
          </Text>
          <Box mx='auto' />
          <Flex alignItems='center'>
            <Label my={0} mr={2} htmlFor='theme'>Theme</Label>
            <Select
              id='theme'
              name='theme'
              value={themeName}
              onChange={e => {
                this.update({ themeName: e.target.value })
              }}>
              {themeOptions.map(opt => (
                <option key={opt}>{opt}</option>
              ))}
            </Select>
          </Flex>
        </Flex>
        <Box
          px={4}
          py={6}
          color='white'
          bg='primary'>
          <Heading is='h1'
            fontSize={[ 5, 6, 7 ]}>
            Rebass Themes
          </Heading>
        </Box>
      </Provider>
    )
  }
}
