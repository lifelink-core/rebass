
import React from 'react'
import PropTypes from 'prop-types'
import Base from './Base'
import config from './config'

/**
 * Media object with vertical alignment using flexbox
 */

const Media = ({
  img,
  right,
  align,
  children,
  ...props
}, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  const alignment = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end'
  }

  const alignItems = alignment[align]

  return (
    <Base
      {...props}
      className='Media'
      baseStyle={{
        display: 'flex',
        marginBottom: scale[2],
        alignItems
      }}>
      <img src={img}
        style={{
          flex: 'none',
          maxWidth: 'none',
          marginRight: right ? 0 : scale[2],
          marginLeft: right ? scale[2] : 0,
          order: right ? 9999 : null
        }} />
      <div children={children} />
    </Base>
  )
}

Media.propTypes = {
  /** Image source */
  img: PropTypes.string,
  /** Displays image to the right */
  right: PropTypes.bool,
  /** Vertical alignment */
  align: PropTypes.oneOf(['top', 'center', 'bottom'])
}

Media.contextTypes = {
  rebass: PropTypes.object
}

export default Media
