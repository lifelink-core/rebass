
import React from 'react'
import PropTypes from 'prop-types'
import Base from './Base'
import config from './config'

/**
 * Styled hr element
 */

const Divider = ({
  width,
  ...props
}, { rebass }) => {
  const { scale, borderColor } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      tagName='hr'
      className='Divider'
      baseStyle={{
        width,
        marginTop: scale[2],
        marginBottom: scale[2],
        border: 0,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor
      }} />
  )
}

Divider.propTypes = {
  /** Sets a fixed width for stylistic options */
  width: PropTypes.number
}

Divider.contextTypes = {
  rebass: PropTypes.object
}

export default Divider
