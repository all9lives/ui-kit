import { Platform } from 'react-native'
import StyleSheet from '../utils/StyleSheet'
import Shadow from '../utils/Shadow'
import Color from '../utils/Color'
import Size from '../utils/Size'

export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0
export const HEADER_HEIGHT = 45
export const TITLE_HEIGHT = 40
export const TITLE_BEGIN_Y = HEADER_HEIGHT + STATUS_BAR_HEIGHT + Size.spacing
export const TITLE_END_Y = STATUS_BAR_HEIGHT
export const SCREEN_PADDING = Size.spacing * 2
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
  scrollable: {
    flex: 1
  },
  body: {
    paddingTop: HEADER_HEIGHT + TITLE_HEIGHT + 5 * Size.spacing
  },
  backBtn: {
    width: HEADER_HEIGHT,
    height: HEADER_HEIGHT
  },
  actionBtns: {
    paddingRight: SCREEN_PADDING / 2
  },
  actionBtn: {
    marginLeft: Size.spacing,
    marginRight: Size.spacing
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
