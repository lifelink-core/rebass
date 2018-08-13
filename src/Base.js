
import React from 'react'
import PropTypes from 'prop-types'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import assign from 'object-assign'
import margins from './util/margins'
import padding from './util/padding'
import radii from './util/radii'
import colorStyle from './util/color-style'
import config from './config'

/**
 * The Base component is internally used by all other Rebass components
 * and provides an API to apply padding, margin, color, background-color,
 * border-radius and other styles to any component.
 * All props for the Base component are available to other Rebass components to help with contextual styling.
 * It is not intended for use directly, but it can be used to create other custom components.
 */

class Base extends React.Component {
  constructor (props, { rebass }) {
    super()
    const { pureRender } = { ...config, ...rebass }
    if (pureRender) {
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
  }

  static contextTypes = {
    rebass: PropTypes.object
  }

  static defaultProps = {
    baseRef: x => x
  }

  static propTypes = {
    /** HTML element string or React component to render */
    tagName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element
    ]),
    /** Used to pull styles from the rebass context object */
    className: PropTypes.string,
    /** Base component styles */
    baseStyle: PropTypes.object,
    /** Styles from component instance - overrides base and context styles */
    style: PropTypes.object,
    /** Function to obtain refs for the underlying Base component */
    baseRef: PropTypes.func,

    /** Applies margin with the margin utility based on the spacing scale */
    m: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies margin top based on the spacing scale */
    mt: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies margin right based on the spacing scale */
    mr: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies margin bottom based on the spacing scale */
    mb: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies margin left based on the spacing scale */
    ml: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies margin left and right based on the spacing scale */
    mx: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies margin top and bottom based on the spacing scale */
    my: PropTypes.oneOf([0, 1, 2, 3, 4]),

    /** Applies padding with the padding utility based on the spacing scale */
    p: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies padding top based on the spacing scale */
    pt: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies padding right based on the spacing scale */
    pr: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies padding bottom based on the spacing scale */
    pb: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies padding left based on the spacing scale */
    pl: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies padding left and right based on the spacing scale */
    px: PropTypes.oneOf([0, 1, 2, 3, 4]),
    /** Applies padding top and bottom based on the spacing scale */
    py: PropTypes.oneOf([0, 1, 2, 3, 4]),

    /** Text color - can either be a key from the config colors object or any color value */
    color: PropTypes.string,
    /** Background color - can either be a key from the config colors object or any color value */
    backgroundColor: PropTypes.string,
    /** Sets color from config */
    theme: PropTypes.oneOf([
      'primary',
      'secondary',
      'default',
      'info',
      'success',
      'warning',
      'error'
    ]),
    /** Inverts colors from theme */
    inverted: PropTypes.bool,
    /** Controls border radius */
    rounded: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([
        'top',
        'right',
        'bottom',
        'left'
      ])
    ]),
    /** Sets border radius 99999 */
    circle: PropTypes.bool,
    /** Sets border radius 99999 */
    pill: PropTypes.bool
  }

  render () {
    const {
      is,
      tagName,
      baseStyle,
      style,
      baseRef,
      ...props
    } = this.props

    const { rebass } = this.context
    const { scale, colors, borderRadius } = { ...config, ...rebass }
    const name = props.className
    const keys = name ? name.split(' ') : []
    const contextStyle = keys.reduce((a, key) => (assign(a, (rebass ? rebass[key] : {}))), {})

    const Component = is || props.Component || tagName || 'div'

    const {
      p, pt, pr, pb, pl, px, py,
      m, mt, mr, mb, ml, mx, my,
      rounded, pill, circle,
      theme, color, backgroundColor, inverted,
      ...elementProps
    } = props

    const sx = assign(
      { boxSizing: 'border-box' },
      baseStyle,
      contextStyle,
      margins({ m, mt, mr, mb, ml, mx, my }, scale),
      padding({ p, pt, pr, pb, pl, px, py }, scale),
      colorStyle({ theme, color, backgroundColor, inverted }, colors, rebass),
      radii({ rounded, pill, circle }, borderRadius),
      style
    )

    return (
      <Component {...elementProps}
        ref={ref => baseRef(ref)}
        style={sx} />
    )
  }
}

export default Base
