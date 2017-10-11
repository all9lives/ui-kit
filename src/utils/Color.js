export const invert = (hex, bw) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }
  let r = parseInt(hex.slice(0, 2), 16)
  let g = parseInt(hex.slice(2, 4), 16)
  let b = parseInt(hex.slice(4, 6), 16)
  if (bw) {
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#FFFFFF'
  }
  r = (255 - r).toString(16)
  g = (255 - g).toString(16)
  b = (255 - b).toString(16)
  return `#${r.padStart(2, '0')}${g.padStart(2, '0')}${b.padStart(2, '0')}`
}

export default {
  primary: '#b71c1c',
  primary_light: '#ea4949',
  error: '#f44336',
  warning: '#f2b233',
  success: '#2ac686',
  black: '#191919',
  white: '#fafafa',
  gray: '#cacaca'
}
