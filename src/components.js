
const px = n => typeof n === 'number' ? n + 'px' : n
const darken = n => `rgba(0, 0, 0, ${n})`

const components = [
  {
    name: 'Box',
    type: 'div',
    props: {},
    style: {},
    system: []
  },
  {
    name: 'Flex',
    type: 'div',
    props: {},
    style: {
      display: 'flex'
    },
    system: [
      'alignItems',
      'justifyContent',
      'flexWrap',
      'flexDirection'
    ]
  },
  // Buttons
  {
    name: 'Button',
    type: 'button',
    props: {
      fontSize: 1,
      fontWeight: 'bold',
      m: 0,
      pl: 3,
      pr: 3,
      pt: 2,
      pb: 2,
      color: 'white',
      bg: 'blue',
      borderWidth: 0,
      borderRadius: 'radius'
    },
    style: {
      fontFamily: 'inherit',
      lineHeight: 16 / 14,
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'center',
      textDecoration: 'none',
      appearance: 'none',
      '&:hover': {
        boxShadow: `inset 0 0 0 999px ${darken(1/8)}`
      },
      '&:focus': {
        outline: 0,
        boxShadow: `0 0 0 2px`
      },
      '&:active': {
        boxShadow: `inset 0 0 8px ${darken(1/4)}`
      },
      '&:disabled': {
        opacity: 1/4
      },
    },
    system: [
      'fontWeight',
      'borderWidth',
      'borderRadius',
      'active'
    ]
  },
  {
    name: 'ButtonOutline',
    type: 'Button',
    props: {
      color: 'blue',
      bg: 'transparent',
      hover: {
        color: 'white',
        backgroundColor: 'blue'
      },
      active: {
        color: 'white',
        backgroundColor: 'blue'
      }
    },
    style: {
      boxShadow: `inset 0 0 0 2px`,
      '&:focus': {
        boxShadow: `inset 0 0 0 2px, 0 0 0 2px`
      },
      '&:active': {
        boxShadow: `inset 0 0 0 2px, inset 0 0 0 8px ${darken(1/4)}`
      }
    },
    system: [
      'hover',
      'active'
    ]
  },
  {
    name: 'ButtonCircle',
    type: 'Button',
    props: {
      pl: 3,
      pr: 3,
      borderRadius: 'radius'
    },
    style: {},
    system: [
      'borderRadius'
    ]
  },
  {
    name: 'ButtonTransparent',
    type: 'Button',
    props: {
      color: 'inherit',
      bg: 'transparent',
      hover: {
        color: 'inherit',
        backgroundColor: 'transparent'
      }
    },
    style: {
      '&:focus': {
        boxShadow: `inset 0 0 0 2px, 0 0 0 2px`
      },
      '&:active': {
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 0 2px, inset 0 0 8px ${darken(1/4)}`
      }
    },
    system: [
      'hover'
    ]
  },
  {
    name: 'Link',
    type: 'a',
    props: {
      color: 'blue'
    },
    style: {}
  },
  {
    name: 'NavLink',
    type: 'a',
    props: {
      f: 1,
      p: 2,
      fontWeight: 'bold',
      bg: 'transparent'
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: 'inherit',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: darken(1/16)
      },
      '&:disabled': {
        opacity: 1/4
      },
    },
    system: [
      'fontWeight'
    ]
  },
  {
    name: 'BlockLink',
    type: 'a',
    props: {},
    style: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
    }
  },

  // Typography
  {
    name: 'Text',
    type: 'p',
    props: {
      m: 0,
    },
    style: {},
    system: [
      'fontWeight',
      'textAlign'
    ]
  },
  {
    name: 'Heading',
    type: 'Text',
    props: {
      // todo: add is prop support
      is: 'h2',
      fontSize: 5,
      m: 0,
      fontWeight: 'bold'
    },
    style: {
      lineHeight: 1.25
    },
    system: [
      'fontWeight'
    ]
  },
  {
    name: 'Subhead',
    type: 'Heading',
    props: {
      is: 'h3',
      fontSize: 4,
      m: 0,
    },
    style: {}
  },
  {
    name: 'Caps',
    type: 'Text',
    props: {
    },
    style: {
      textTransform: 'uppercase'
    },
    system: []
  },
  {
    name: 'Small',
    type: 'Text',
    props: {
      is: 'small',
      fontSize: 0
    },
    style: {}
  },
  {
    name: 'Lead',
    type: 'Text',
    props: {
      is: 'p',
      fontSize: 3,
      m: 0
    },
    style: {
      lineHeight: 1.25
    }
  },
  {
    name: 'Pre',
    type: 'pre',
    props: {
      fontSize: 1,
      m: 0,
    },
    style: {
      // todo
      // fontFamily: props.theme.monospace,
      fontFamily: 'Menlo, monospace',
      overflow: 'auto'
    }
  },
  {
    name: 'Code',
    type: 'code',
    props: {
      fontSize: 1,
    },
    style: props => ({
      // fontFamily: props.theme.monospace
      fontFamily: 'Menlo, monospace'
    })
  },
  {
    name: 'Samp',
    type: 'Code',
    props: {
      is: 'samp'
    },
    style: {}
  },
  {
    name: 'Blockquote',
    type: 'Text',
    props: {
      is: 'blockquote',
      m: 0,
      fontSize: 3,
    },
    style: {}
  },
  {
    name: 'Measure',
    type: 'div',
    props: {},
    style: {
      maxWidth: '32em'
    }
  },
  {
    name: 'Truncate',
    type: 'Text',
    props: {},
    style: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  },

  // Forms
  {
    name: 'Label',
    type: 'label',
    props: {
      fontSize: 1,
      mb: 1
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  {
    name: 'Input',
    type: 'input',
    props: {
      type: 'text',
      fontSize: 'inherit',
      p: 1,
      m: 0,
      w: 1,
      color: 'inherit',
      bg: 'transparent',
      borderRadius: 'radius'
    },
    style: {
      fontFamily: 'inherit',
      lineHeight: 'inherit',
      display: 'inline-block',
      verticalAlign: 'middle',
      border: 0,
      boxShadow: `inset 0 0 0 1px ${darken(1/4)}`,
      appearance: 'none',
      '&:focus': {
        outline: 'none',
        boxShadow: `inset 0 0 0 1px ${darken(1/4)}`,
        // boxShadow: `inset 0 0 0 1px ${color(props)('blue')}`,
      },
      '&:disabled': {
        opacity: 1/4
      },
    },
    system: [
      'borderRadius',
      'focus'
    ]
  },
  /* todo handle with jsx
  {
    name: 'Select',
    type: SelectBase,
    props: {
      m: 0,
      w: 1,
      color: 'inherit',
      bg: 'transparent'
    },
    style: props => ({
      display: 'inline-block',
      verticalAlign: 'middle',
      select: {
        padding: px(idx('space.1', props.theme)),
        boxShadow: `inset 0 0 0 1px ${color(props)('gray2')}`,
        borderRadius: px(props.theme.radius),

        '&:focus': {
          boxShadow: `inset 0 0 0 1px ${color(props)('blue')}`,
        },
        '&:disabled': {
          opacity: 1/4
        }
      }
    })
  },
  */
  {
    name: 'Textarea',
    type: 'textarea',
    props: {
      p: 1,
      m: 0,
      w: 1,
      color: 'inherit',
      bg: 'transparent',
      borderRadius: 'radius'
    },
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      border: 0,
      boxShadow: `inset 0 0 0 1px ${darken(1/4)}`,
      appearance: 'none',
      '&:focus': {
        outline: 'none',
        boxShadow: `inset 0 0 0 1px ${darken(1/4)}`,
      },
      '&:disabled': {
        opacity: 1/4
      },
    }
  },
  {
    name: 'Checkbox',
    type: 'input',
    props: {
      type: 'checkbox',
      mr: 1
    },
    style: {}
  },
  {
    name: 'Radio',
    type: 'input',
    props: {
      type: 'radio',
      mr: 1
    },
    style: {}
  },
  {
    name: 'Slider',
    type: 'input',
    props: {
      w: 1,
      mt: 2,
      mb: 2,
      ml: 0,
      mr: 0,
      bg: 'gray2',
      type: 'range'
    },
    style: {
      display: 'block',
      height: '4px',
      cursor: 'pointer',
      color: 'inherit',
      borderRadius: px(99999),
      appearance: 'none',
      '&::-webkit-slider-thumb': {
        width: px(16),
        height: px(16),
        backgroundColor: 'currentcolor',
        border: 0,
        borderRadius: px(99999),
        appearance: 'none'
      },
      '&:focus': {
        '&::-webkit-slider-thumb': {
        }
      }
    }
  },

  {
    name: 'Image',
    type: 'img',
    props: {},
    style: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    }
  },
  {
    name: 'Avatar',
    type: 'img',
    props: {
      borderRadius: 99999
    },
    style: {
      display: 'inline-block',
      width: px(48),
      height: px(48)
    },
    system: [
      'borderRadius'
    ]
  },

  {
    name: 'BackgroundImage',
    type: 'div',
    props: {
      w: 1,
      pb: '75%'
      // ratio: 3/4 // How does styled-components handle this??
      // Fix this once non-whitelisted styled-components is out
    },
    style: {
      // todo
      // backgroundImage: props.src ? `url(${props.src})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 0,
      // todo
      // paddingBottom: ((props.ratio || 3/4) * 100) + '%'
    },
    system: [
      // 'backgroundImage'
      // [ 'style', {
      //    prop: 'image',
      //    cssProperty: 'backgroundImage',
      //    transform: fn?
      // } ]
    ]
  },

  // Layout
  {
    name: 'Container',
    type: 'div',
    props: {
      px: 3,
      ml: 'auto',
      mr: 'auto'
    },
    style: {
      maxWidth: 1024
      // todo
      // maxWidth: px(props.maxWidth || idx('maxWidth', props.theme) || 1024)
    },
    system: []
  },
  {
    name: 'Divider',
    type: 'hr',
    props: {
      mt: 2,
      mb: 2,
      borderWidth: 1,
      borderBottom: true,
      color: 'gray'
    },
    style: {},
    system: [
      'borderWidth',
      // 'borderColor'
    ]
  },
  {
    name: 'Border',
    type: 'div',
    props: {
      borderWidth: 1
    },
    system: [
      'borderWidth',
      'borderColor'
    ],
    /*
    style: props => {
      const w = px(props.borderWidth || 1)
      const borderWidth = (!props.top && !props.right && !props.bottom && !props.left)
        ? { borderWidth: w }
        : null
      const directions = borderWidth ? null : {
        borderTopWidth: props.top ? w : 0,
        borderRightWidth: props.right ? w : 0,
        borderBottomWidth: props.bottom ? w : 0,
        borderLeftWidth: props.left ? w : 0,
      }

      return Object.assign({
        borderStyle: 'solid',
        borderColor: color(props)(props.color || 'gray2'),
        color: 'inherit'
      }, borderWidth, directions)
    },
    */
  },
  {
    name: 'Media',
    type: 'div',
    props: {},
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  },

  {
    name: 'Card',
    type: 'div',
    props: {
      bg: 'white',
      borderRadius: 'radius',
      boxShadow: 0
    },
    style: {
      overflow: 'hidden',
    },
    system: [
      'borderRadius',
      'boxShadow'
    ]
  },
  {
    name: 'Banner',
    type: 'div',
    props: {
      p: [ 3, 4 ]
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // todo
      // backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : 'none',
    },
    system: [
    ]
  },
  {
    name: 'Panel',
    type: 'div',
    props: {
      borderRadius: 'radius'
    },
    style: {
      overflow: 'hidden',
      borderWidth: px(1),
      borderStyle: 'solid',
    },
    system: [
      'borderRadius'
    ]
  },
  {
    name: 'PanelHeader',
    type: 'header',
    props: {
      fontSize: 2,
      p: 2,
      fontWeight: 'bold',
      borderWidth: 1,
      borderBottom: true
    },
    style: {},
    system: [
      'fontWeight',
      'borderWidth',
      'borderColor'
    ]
  },
  {
    name: 'PanelFooter',
    type: 'footer',
    props: {
      fontSize: 1,
      p: 2,
      fontWeight: 'bold',
      borderWidth: 1,
      borderTop: 'true'
    },
    style: {},
    system: [
      'fontWeight',
      'borderWidth',
      'borderColor'
    ]
  },

  // UI
  {
    name: 'Progress',
    type: 'progress',
    props: {
      w: 1,
      m: 0,
      bg: 'gray2',
      borderRadius: 'radius'
    },
    style: {
      display: 'block',
      height: px(4),
      overflow: 'hidden',
      appearance: 'none',
      '&::-webkit-progress-bar': {
        backgroundColor: 'transparent'
      },
      '&::-webkit-progress-value': {
        backgroundColor: 'currentcolor'
      },
      '&::-moz-progress-bar': {
        backgroundColor: 'currentcolor'
      }
    },
    system: [
      'borderRadius'
    ]
  },
  {
    name: 'Message',
    type: 'div',
    props: {
      pl: 3,
      pr: 3,
      pt: 2,
      pb: 2,
      fontWeight: 'bold',
      color: 'white',
      bg: 'blue'
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: px(48)
    },
    system: [
      'fontWeight'
    ]
  },
  /* todo
  {
    name: 'Group',
    type: 'div',
    props: {},
    style: props => {
      const R = px(props.theme.radius || 4)
      return {
        '& > *': {
          borderRadius: 0
        },
        '& > *:first-child': {
          borderRadius: `${R} 0 0 ${R}`

        },
        '& > *:last-child': {
          borderRadius: `0 ${R} ${R} 0`
        },
      }
    }
  },
  */

  {
    name: 'Toolbar',
    type: 'div',
    props: {
      pl: 2,
      pr: 2,
      color: 'white',
      bg: 'gray9'
    },
    style: {
      display: 'flex',
      minHeight: px(48),
      alignItems: 'center'
    }
  },

  {
    name: 'Badge',
    type: 'div',
    props: {
      fontSize: 0,
      fontWeight: 'bold',
      p: 1,
      ml: 1,
      mr: 1,
      borderRadius: 'radius',
      color: 'white',
      bg: 'blue'
    },
    style: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    system: [
      'fontWeight',
      'borderRadius'
    ]
  },
  {
    name: 'Circle',
    type: 'Badge',
    props: {
      color: 'white',
      bg: 'blue',
    },
    style: {
      textAlign: 'center',
      // todo: props.size
      width: px(24),
      height: px(24),
      borderRadius: px(99999)
    },
    system: []
  },
  {
    name: 'Overlay',
    type: 'div',
    props: {
      p: 3,
      bg: 'white',
      borderRadius: 'radius'
    },
    style: {
      // todo
      display: 'none',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '100vw',
      maxHeight: '100vh',
      overflow: 'auto',
      boxShadow: `0 0 0 60vmax ${darken(1/2)}, 0 0 32px ${darken(1/4)}`,
    }
  },

  {
    name: 'Tabs',
    type: 'div',
    props: {
      borderColor: 'gray2'
    },
    style: {
      display: 'flex',
      borderBottomWidth: px(1),
      borderBottomStyle: 'solid',
    }
  },
  {
    name: 'TabItem',
    type: 'a',
    props: {
      fontSize: 1,
      fontWeight: 'bold',
      mr: 3,
      pt: 2,
      pb: 2,
      borderWidth: 2,
      borderBottom: true,
      hover: {
        color: 'blue'
      }
    },
    style: {
      textDecoration: 'none',
      // todo?
      // color: props.active ? color(props)('blue') : 'inherit',
      // borderBottomWidth: props.active ? 2 : 0,
    },
    system: [
      'hover'
    ]
  },

  {
    name: 'DotButton',
    type: 'button',
    props: {
      m: 0,
      borderWidth: 4,
      hover: {
        backgroundColor: 'blue'
      },
      focus: {
        backgroundColor: 'blue'
      }
    },
    style: {
      padding: 0,
      width: px(16),
      height: px(16),
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundClip: 'padding-box',
      borderRadius: px(99999),
      // todo
      // backgroundColor: props.active ? 'currentcolor' : darken(1/4),
      appearance: 'none',
      '&:disabled': {
        opacity: 1/4
      }
    },
    system: [
      'borderWidth',
      'hover',
      'focus'
    ]
  },

  {
    name: 'Relative',
    type: 'div',
    props: {},
    style: {
      position: 'relative',
      // use style prop?
      // zIndex: props.z
    }
  },
  /*
  {
    name: 'Absolute',
    type: 'div',
    props: {},
    style: {
      position: 'absolute',
      // top: props.top ? 0 : null,
      // right: props.right ? 0 : null,
      // bottom: props.bottom ? 0 : null,
      // left: props.left ? 0 : null,
      // zIndex: props.z
    },
  },
  {
    name: 'Fixed',
    type: 'div',
    props: {},
    style: {
      position: 'fixed',
      // top: props.top ? 0 : null,
      // right: props.right ? 0 : null,
      // bottom: props.bottom ? 0 : null,
      // left: props.left ? 0 : null,
      // zIndex: props.z
    }
  },
  {
    name: 'Sticky',
    type: 'div',
    props: {},
    style: {
      position: '-webkit-sticky',
      position: 'sticky'
      // top: ${props.top ? 0 : null};
      // right: ${props.right ? 0 : null};
      // bottom: ${props.bottom ? 0 : null};
      // left: ${props.left ? 0 : null};
      // z-index: ${props.z};
    }
  },
  */
  /* yeeesh
  {
    name: 'Drawer',
    type: 'Fixed',
    props: {
      bg: 'white',
      position: 'left',
      size: 320,
    },
    style: props => {
      const position = props.position
      const size = props.size
      const h = /^(left|right)$/.test(position) ? 1 : 0
      const width = h ? { width: px(size) } : null
      const height = h ? null : { height: px(size) }
      const transforms = {
        left: 'translateX(-100%)',
        right: 'translateX(100%)',
        top: 'translateY(-100%)',
        bottom: 'translateY(100%)',
      }
      const transform = !props.open
        ? { transform: transforms[position] }
        : null

      const top = /^(top|left|right)$/.test(position) ? { top: 0 } : null
      const bottom = /^(bottom|left|right)$/.test(position) ? { bottom: 0 } : null
      const left = /^(left|top|bottom)$/.test(position) ? { left: 0 } : null
      const right = /^(right|top|bottom)$/.test(position) ? { right: 0 } : null

      return Object.assign({
        overflowX: 'hidden',
        overflowY: 'auto',
        transitionProperty: 'transform',
        transitionDuration: '.2s',
        transitionTimingFunction: 'ease-out'
      },
        top,
        bottom,
        left,
        right,
        transform,
        width,
        height
      )
    },
    propTypes: {
      size: number,
      position: oneOf([
        'top',
        'right',
        'bottom',
        'left',
      ])
    }
  },
  */

    /*
  {
    name: 'Carousel',
    type: 'div',
    props: {
    },
    style: props => ({
      width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      '& > div:first-child': {
        marginLeft: (props.index * -100) + '%',
        transitionProperty: 'margin',
        transitionDuration: '.2s',
        transitionTimingFunction: 'ease-out'
      }
    }),
    propTypes: {
      index: number
    }
  },
  */
  {
    name: 'ScrollCarousel',
    type: 'div',
    props: {},
    style: {
      width: '100%',
      overflow: 'auto',
      whiteSpace: 'nowrap',
      scrollSnapPointsX: 'repeat(100%)',
      scrollSnapType: 'mandatory',
      scrollSnapDestination: '0% 100%',
    }
  },
  {
    name: 'CarouselSlide',
    type: 'div',
    props: {
      w: 1,
      p: 3
    },
    style: {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  },

  /*
  {
    name: 'Tooltip',
    type: 'div',
    props: {
      color: 'white',
      bg: 'black'
    },
    style: props => ({
      display: 'inline-block',
      position: 'relative',
      color: 'inherit',
      backgroundColor: 'transparent',
      '&::before': {
        display: 'none',
        content: `"${props.text}"`,
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%, -4px)',
        whiteSpace: 'nowrap',
        fontSize: px(idx('fontSizes.0', props.theme)),
        paddingTop: px(idx('space.1', props.theme)),
        paddingBottom: px(idx('space.1', props.theme)),
        paddingLeft: px(idx('space.2', props.theme)),
        paddingRight: px(idx('space.2', props.theme)),
        color: color(props)(props.color),
        backgroundColor: color(props)(props.bg),
        borderRadius: px(props.theme.radius),
      },
      '&::after': {
        display: 'none',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%, 8px)',
        content: '" "',
        borderWidth: px(6),
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderTopColor: color(props)(props.bg),
      },
      '&:hover': {
        '&::before, &::after': {
          display: 'block'
        },
      }
    })
  },
  */

  /*
  {
    name: 'Switch',
    type: 'div',
    props: {
      role: 'checkbox',
      color: 'blue'
    },
    style: props => ({
      display: 'inline-flex',
      width: px(40),
      height: px(24),
      borderRadius: px(9999),
      backgroundColor: props.checked ? color(props)(props.color) : 'transparent',
      boxShadow: 'inset 0 0 0 2px',
      transitionProperty: 'background-color',
      transitionDuration: '.2s',
      transitionTimingFunction: 'ease-out',
      userSelect: 'none',
      '&::after': {
        content: '" "',
        width: px(16),
        height: px(16),
        margin: px(4),
        borderRadius: px(9999),
        transitionProperty: 'transform, color',
        transitionDuration: '.1s',
        transitionTimingFunction: 'ease-out',
        transform: props.checked ? `translateX(16px)` : `translateX(0)`,
        backgroundColor: props.checked ? color(props)('white') : color(props)(props.color),
      }
    })
  },
  */

  {
    name: 'Close',
    type: 'ButtonTransparent',
    props: {
      p: 0,
      f: 3,
      children: '×'
    },
    style: {
      lineHeight: 1,
      width: px(24),
      height: px(24)
    }
  },

  /*
  {
    name: 'Star',
    type: 'div',
    props: {
      f: 3,
      color: 'yellow',
      children: '★'
    },
    style: props => ({
      position: 'relative',
      width: '1em',
      height: '1em',
      color: props.checked ? color(props)(props.color) : darken(1/8),
      '&::after': {
        display: props.half ? 'block' : 'none',
        content: '"★"',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '1em',
        height: '1em',
        color: color(props)(props.color),
        clip: 'rect(0, .45em, 1em, 0)'
      }
    })
  },
  */

  {
    name: 'ArrowDown',
    type: 'div',
    props: {},
    style: {
      display: 'inline-block',
      width: 0,
      height: 0,
      verticalAlign: 'middle',
      borderRight: '.3125em solid transparent',
      borderLeft: '.3125em solid transparent',
      borderTop: '.4375em solid'
    }
  },
  {
    name: 'ArrowUp',
    type: 'div',
    props: {},
    style: {
      display: 'inline-block',
      width: 0,
      height: 0,
      verticalAlign: 'middle',
      borderRight: '.3125em solid transparent',
      borderLeft: '.3125em solid transparent',
      borderBottom: '.4375em solid'
    }
  },

  {
    name: 'Embed',
    type: 'div',
    props: {},
    style: {
      position: 'relative',
      height: 0,
      padding: 0,
      paddingBottom: `${9 / 16 * 100}%`,
      // todo
      // paddingBottom: `${(props.ratio || 9 / 16) * 100}%`,
      overflow: 'hidden',
      '& > iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        border: 0
      }
    }
  },

  /* todo handle with jsx
  {
    name: 'Donut',
    type: DonutBase,
    props: {
      color: 'blue',
      strokeWidth: 2,
      value: 1
    },
    style:  {}
  },
  */

  {
    name: 'Row',
    type: 'Flex',
    props: {
      mx: -3,
    },
    style: {}
  },
  {
    name: 'Column',
    type: 'Box',
    props: {
      px: 3,
      mb: 4,
      flex: '1 1 auto'
    },
    style: {}
  },
]

module.exports = components
