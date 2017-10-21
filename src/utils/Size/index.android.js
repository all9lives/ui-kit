import { Platform, Dimensions } from 'react-native'
import base from './base'

const SCREEN_HEIGHT_ADJUST = Platform.OS === 'ios' ? 0 : 25

export default {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height - SCREEN_HEIGHT_ADJUST, // status bar
  ...base
}
