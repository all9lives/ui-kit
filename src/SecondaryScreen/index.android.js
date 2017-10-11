import React, { Component } from 'react'
import styled from 'styled-components/native'
import { View as RNView, Text as RNText, ScrollView, TouchableOpacity, Animated } from 'react-native'
import styles, { TITLE_BEGIN_Y, TITLE_END_Y, TITLE_BEGIN_X, TITLE_END_X } from './styles'
import View from '../View'
import Text from '../Text'
import base from './base'
import defaultProps from './defaultProps'

const TRANSITION_TIME = 300

const AnimatedView = Animated.createAnimatedComponent(RNView)
const AnimatedText = Animated.createAnimatedComponent(RNText)

export const Header = ({ toggleHeader, headerStyle, actionButtons, onBackPress }) => (
  <View
    style={[styles.header, toggleHeader && styles.shadow, headerStyle]}
    align='middle'
    direction='row'
  >
    <TouchableOpacity onPress={onBackPress}>
      <View style={styles.backBtn} align='center middle'>
        <Text>{'<'}</Text>
      </View>
    </TouchableOpacity>
    <View grow={1} />
    <View style={styles.actionBtns} direction='row' align='middle'>
      {actionButtons.map((btn, i) => <View key={i} style={styles.actionBtn}>{btn}</View>)}
    </View>
  </View>
)

class BaseComponent extends Component {
  static defaultProps = {
    title: 'Title',
    actionButtons: []
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
    if (scrollTop > 10 && !this.state.toggleHeader) {
      this.setState({ toggleHeader: true })
    } else if (scrollTop <= 10 && this.state.toggleHeader) {
      this.setState({ toggleHeader: false })
    }
  }
  render () {
    const { toggleHeader } = this.state
    const { headerStyle, bodyStyle, title, children, actionButtons, onBackPress } = this.props
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
      outputRange: [30, 16]
    })
    return (
      <View style={[this.props.style, styles.container]}>
        <Header
          toggleHeader={toggleHeader}
          headerStyle={headerStyle}
          actionButtons={actionButtons}
          onBackPress={onBackPress}
        />
        <AnimatedView
          style={[styles.title, { top: animatedTop, left: animatedLeft }]}
        >
          <AnimatedText
            style={[styles.titleText, { fontSize: animatedFontSize }]}
          >
            {title}
          </AnimatedText>
        </AnimatedView>
        <ScrollView
          style={styles.scrollable}
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
const SecondaryScreen = styled(BaseComponent)`
  ${base}
`
SecondaryScreen.defaultProps = defaultProps

export default SecondaryScreen
