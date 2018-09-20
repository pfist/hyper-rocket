// Hyper Rocket //
'use strict'

const foregroundColor = '#efdab8'
const backgroundColor = '#343232'
const rocketRed = '#e16b51'
const rocketGreen = '#76ce85'
const rocketYellow = '#ffc966'
const rocketBlue = '#7caad0'
const rocketMagenta = '#b697ce'
const rocketCyan = '#94d1c0'

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: '#272525',
  cursorColor: foregroundColor,
  cursorAccentColor: backgroundColor,
  selectionColor: 'rgba(104, 100, 100, 0.3)',
  colors: {
    black: '#4e4b4b',
    red: rocketRed,
    green: rocketGreen,
    yellow: rocketYellow,
    blue: rocketBlue,
    magenta: rocketMagenta,
    cyan: rocketCyan,
    white: foregroundColor,
    lightBlack: '#686868',
    lightRed: rocketRed,
    lightGreen: rocketGreen,
    lightYellow: rocketYellow,
    lightBlue: rocketBlue,
    lightMagenta: rocketMagenta,
    lightCyan: rocketCyan,
    lightWhite: foregroundColor,
  }
})
