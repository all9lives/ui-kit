import { StyleSheet, Platform } from 'react-native'

export default function Style (styles) {
  const platformStyle = {}
  Object.keys(styles).forEach(name => {
    const { ios, android, ...style } = { ...styles[name] }
    let newStyle = style
    if (ios && Platform.OS === 'ios') {
      newStyle = { ...style, ...ios }
    }
    if (android && Platform.OS === 'android') {
      newStyle = { ...style, ...android }
    }
    platformStyle[name] = newStyle
  })
  return StyleSheet.create(platformStyle)
}
