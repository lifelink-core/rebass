
import React from 'react'
import PropTypes from 'prop-types'
import Base from './Base'
import HeadingLink from './HeadingLink'
import Text from './Text'
import config from './config'

/**
 * Header for section elements
 */

const SectionHeader = ({
  heading,
  href,
  description,
  children,
  ...props
}, { rebass }) => {
  const { scale, borderColor } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      tagName='header'
      className='SectionHeader'
      baseStyle={{
        display: 'flex',
        alignItems: 'center',
        paddingBottom: scale[1],
        marginTop: scale[3],
        marginBottom: scale[3],
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor
      }}>
      <div style={{
        flex: '1 1 auto' }}>
        <HeadingLink href={href || `#${heading || ''}`} children={heading} />
        {description && (
          <Text children={description} />
        )}
      </div>
      {children}
    </Base>
  )
}

SectionHeader.propTypes = {
  /** Section heading */
  heading: PropTypes.string,
  /** Link to section, used in HeadingLink */
  href: PropTypes.string,
  /** Description of section */
  description: PropTypes.string
}

SectionHeader.contextTypes = {
  rebass: PropTypes.object
}

export default SectionHeader
