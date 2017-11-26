import React, { Component } from 'react'
import styled from 'styled-components/native'
import { View as RNView, Text as RNText, ScrollView, TouchableOpacity, Animated, RefreshControl } from 'react-native'
import Size from '../utils/Size'
import styles, { TITLE_BEGIN_Y, TITLE_END_Y, TITLE_BEGIN_X, TITLE_END_X } from './styles'
import View from '../View'
import Icon from '../Icon'
import base from './base'
import defaultProps from './defaultProps'

const SCROLL_THRESHOLD = Size.spacing * 3.5
const TRANSITION_TIME = 300

const AnimatedView = Animated.createAnimatedComponent(RNView)
const AnimatedText = Animated.createAnimatedComponent(RNText)

export const Header = ({ toggleHeader, headerStyle, actionButtons, onBackPress, whiteStyle, transparent }) => (
  <View
    style={[
      styles.header,
      (toggleHeader && !transparent) && styles.shadow,
      headerStyle,
      transparent && styles.transparent
    ]}
    align='middle'
    direction='row'
  >
    <TouchableOpacity onPress={onBackPress}>
      <View style={styles.backBtn} align='center middle'>
        <Icon source={whiteStyle ? require('../assets/back-white.png') : require('../assets/back-black.png')} />
      </View>
    </TouchableOpacity>
    <View grow={1} />
    <View style={styles.actionBtns} direction='row' align='middle'>
      {actionButtons.map((btn, i) => <View key={i} style={styles.actionBtn}>{btn}</View>)}
    </View>
  </View>
)

export class Base extends Component {
  static defaultProps = {
    title: 'Title',
    actionButtons: [],
    refreshing: false
  }
  state = {
    toggleHeader: false
  }
  animatedValue = new Animated.Value(0)
  componentWillUpdate (nextProps, nextState) {
    if (nextState.toggleHeader !== this.state.toggleHeader) {
      Animated.timing(this.animatedValue, {
        toValue: nextState.toggleHeader ? 1 : 0,
        duration: TRANSITION_TIME
      }).start()
    }
  }
  handleScroll = (e) => {
    const scrollTop = e.nativeEvent.contentOffset.y
    if (scrollTop > SCROLL_THRESHOLD && !this.state.toggleHeader) {
      this.setState({ toggleHeader: true })
    } else if (scrollTop <= SCROLL_THRESHOLD && this.state.toggleHeader) {
      this.setState({ toggleHeader: false })
    }
    if (this.props.onScroll) {
      this.props.onScroll(e)
    }
  }
  render () {
    const { toggleHeader } = this.state
    const { headerStyle, bodyStyle, title, children, actionButtons,
      onBackPress, whiteStyle, getScrollViewRef, refreshing,
      onRefresh, transparentHeader } = this.props
    const animatedTop = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [TITLE_BEGIN_Y, TITLE_END_Y]
    })
    const animatedLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [TITLE_BEGIN_X, TITLE_END_X]
    })
    const animatedFontSize = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [Size.title, Size.regular]
    })
    const textStyle = [styles.titleText, { fontSize: animatedFontSize }]
    if (whiteStyle) {
      textStyle.push(styles.titleWhite)
    }
    return (
      <View style={[this.props.style, styles.container]}>
        <Header
          toggleHeader={toggleHeader}
          headerStyle={headerStyle}
          actionButtons={actionButtons}
          onBackPress={onBackPress}
          whiteStyle={whiteStyle}
          transparent={transparentHeader}
        />
        <AnimatedView
          style={[styles.title, { top: animatedTop, left: animatedLeft }]}
        >
          <AnimatedText
            style={textStyle}
          >
            {title}
          </AnimatedText>
        </AnimatedView>
        <ScrollView
          ref={getScrollViewRef}
          style={styles.scrollable}
          refreshControl={(refreshing || onRefresh) && <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
          contentContainerStyle={[styles.body, bodyStyle]}
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
        >
          {children}
        </ScrollView>
      </View>
    )
  }
}
const SecondaryScreen = styled(Base)`
  ${base}
`
SecondaryScreen.defaultProps = defaultProps

export default SecondaryScreen
