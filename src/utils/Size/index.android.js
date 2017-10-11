import { Platform } from 'react-native'
import Dimensions from 'Dimensions'

const SCREEN_HEIGHT_ADJUST = Platform.OS === 'ios' ? 0 : 25

export default {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height - SCREEN_HEIGHT_ADJUST, // status bar
  icon: 24,
  spacing: 10,
  small: 14,
  regular: 16,
  large: 18,
  title: 25
}
