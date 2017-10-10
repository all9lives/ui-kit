import { Platform } from 'react-native'

export default {
  normal (width = 5, height = width, op = 0.2, color = 'black') {
    if (Platform.OS === 'ios') {
      return {
        shadowColor: color,
        shadowOffset: {
          width,
          height
        },
        shadowOpacity: op,
        shadowRadius: 2.5
      }
    }
    return {
      elevation: width
    }
  }
}
