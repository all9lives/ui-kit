import { Platform } from 'react-native'
import StyleSheet from '../utils/StyleSheet'
import Shadow from '../utils/Shadow'
import Color from '../utils/Color'

export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0
export const HEADER_HEIGHT = 45
export const TITLE_HEIGHT = 40
export const TITLE_BEGIN_Y = HEADER_HEIGHT + STATUS_BAR_HEIGHT
export const TITLE_END_Y = STATUS_BAR_HEIGHT
export const SCREEN_PADDING = 20
export const TITLE_BEGIN_X = SCREEN_PADDING
export const TITLE_END_X = HEADER_HEIGHT

export default new StyleSheet({
  container: {
    height: '100%',
    width: '100%',
    ios: {
      paddingTop: STATUS_BAR_HEIGHT
    }
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: Color.white,
    zIndex: 1,
    ios: {
      top: STATUS_BAR_HEIGHT
    }
  },
  shadow: {
    ...Shadow.normal()
  },
  body: {
    marginTop: HEADER_HEIGHT + TITLE_HEIGHT * 1.2,
    padding: SCREEN_PADDING
  },
  backBtn: {
    width: HEADER_HEIGHT,
    height: HEADER_HEIGHT
  },
  actionBtns: {
    paddingRight: SCREEN_PADDING
  },
  actionBtn: {
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 9,
    android: {
      elevation: 6
    }
  },
  titleText: {
    backgroundColor: 'transparent'
  }
})
