import StyleSheet from '../utils/StyleSheet'
import Size from '../utils/Size'
import Color from '../utils/Color'

export default new StyleSheet({
  container: {
    height: '100%',
    width: '100%'
  },
  header: {
    backgroundColor: Color.white,
    ios: {
      paddingTop: Size.statusBarSize
    }
  },
  headerInverse: {
    backgroundColor: Color.black
  },
  title: {
    color: Color.black
  },
  titleInverse: {
    color: Color.white
  },
  scrollView: {
    flex: 1
  },
  backBtn: {
    paddingTop: Size.spacing,
    paddingBottom: Size.spacing,
    paddingLeft: Size.spacing,
    paddingRight: Size.spacing
  }
})
