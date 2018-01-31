import React, { Component } from 'react'
import styled from 'styled-components/native'
import { View as RNView, Text as RNText, ScrollView, TouchableOpacity, Animated, RefreshControl } from 'react-native'
import Size from '../utils/Size'
import Color from '../utils/Color'
import styles, { HEADER_HEIGHT, TITLE_BEGIN_Y, TITLE_END_Y, TITLE_BEGIN_X, TITLE_END_X } from './styles'
import View from '../View'
import Icon from '../Icon'
import base from './base'
import defaultProps from './defaultProps'

const SCROLL_THRESHOLD = Size.spacing * 3.5
const TRANSITION_TIME = 300

const AnimatedView = Animated.createAnimatedComponent(RNView)
const AnimatedText = Animated.createAnimatedComponent(RNText)

export const Header = ({ whiteStyle, style, actionButtons, onBackPress }) => (
  <View
    style={[
      styles.header,
      style,
      !whiteStyle && styles.shadow,
      whiteStyle && styles.transparent
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
      onBackPress, getScrollViewRef, refreshing,
      onRefresh, transparentHeader, scrollViewProps } = this.props
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
    const whiteStyle = transparentHeader && !toggleHeader
    return (
      <View style={[this.props.style, styles.container]}>
        <Header
          whiteStyle={whiteStyle}
          style={headerStyle}
          actionButtons={actionButtons}
          onBackPress={onBackPress}
        />
        <AnimatedView
          style={[styles.title, { top: animatedTop, left: animatedLeft }]}
        >
          <AnimatedText
            ref={c => (this.refTitle = c)}
            style={[styles.titleText, { fontSize: animatedFontSize, color: whiteStyle ? Color.white : Color.black }]}
          >
            {title}
          </AnimatedText>
        </AnimatedView>
        <ScrollView
          ref={getScrollViewRef}
          style={[styles.scrollable, !transparentHeader && styles.adjustedScrollable]}
          refreshControl={(refreshing || onRefresh) && <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={HEADER_HEIGHT}
          />}
          contentContainerStyle={[styles.body, bodyStyle, !transparentHeader && styles.adjustedBody]}
          onScroll={this.handleScroll}
          scrollEventThrottle={16}
          {...scrollViewProps}
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
