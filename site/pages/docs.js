import React from 'react'
import {
  Flex,
  Box,
  Container,
  Heading,
  NavLink,
} from 'rebass'
import { Link } from 'react-router-dom'
import scope from '../src/scope'

export default class Docs extends React.Component {
  static getInitialProps = async ({ path }) => {
    const routes = require('../src/docs').default
    return {
      path: '/:name',
      routes
    }
  }

  render () {
    const { match, routes } = this.props
    const { name } = match.params
    const doc = routes.find(route => route.name === name)

    if (!doc) return <pre>not found</pre>

    const { Component } = doc

    return (
      <Flex>
        <Box width={320}>
          {routes.map(route => (
            <NavLink
              key={route.name}
              is={Link}
              to={route.path}
              color={route.name === name ? 'white' : undefined}
              bg={route.name === name ? 'black' : undefined}
              width={1}>
              {route.name}
            </NavLink>
          ))}
        </Box>
        <Box width={1}>
          <Container px={3} py={4}>
            <Component scope={scope} />
          </Container>
        </Box>
      </Flex>
    )
  }
}
