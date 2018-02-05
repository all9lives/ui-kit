import React, { Component } from 'react'
import { Platform, StatusBar, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import styled from 'styled-components/native'
import base from './base'
import defaultProps from './defaultProps'
import View from '../View'
import Text from '../Text'
import Icon from '../Icon'
import styles from './style'

const SCROLL_THRESHOLD = 0

export const Header = ({ inverse, title, onBackPress, titleStyle }) => (
  <View
    direction='row'
    align='middle'
    style={[styles.header, inverse && styles.headerInverse]}
  >
    {Platform.OS === 'ios' &&
      <StatusBar
        barStyle={inverse ? 'light-content' : 'dark-content'}
      />}
    <TouchableOpacity onPress={onBackPress}>
      <View style={styles.backBtn} align='center middle'>
        <Icon source={inverse
          ? require('../assets/back-white.png')
          : require('../assets/back-black.png')}
        />
      </View>
    </TouchableOpacity>
    <Text style={[inverse ? styles.titleInverse : styles.title, titleStyle]}>
      {title}
    </Text>
    <View grow={1} />
  </View>
)

export const Body = ({ getScrollViewRef, bodyStyle, refreshing, onRefresh,
bodyProps, children, handleScroll }) => (
  <ScrollView
    ref={getScrollViewRef}
    style={styles.scrollView}
    contentContainerStyle={[styles.body, bodyStyle]}
    refreshControl={(refreshing || onRefresh) && <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
    />}
    onScroll={handleScroll}
    scrollEventThrottle={16}
    {...bodyProps}
  >
    {children}
  </ScrollView>
)

export class Base extends Component {
  state = {
    isScrolled: false
  }
  handleScroll = (e) => {
    const scrollTop = e.nativeEvent.contentOffset.y
    if (scrollTop > SCROLL_THRESHOLD && !this.state.isScrolled) {
      this.setState(() => ({ isScrolled: true }))
    } else if (scrollTop <= SCROLL_THRESHOLD && this.state.isScrolled) {
      this.setState(() => ({ isScrolled: false }))
    }
    if (this.props.onScroll) {
      this.props.onScroll(e)
    }
  }
  render () {
    const { isScrolled } = this.state
    const {
      children, style, reverse,
      headerStyle, title, onBackPress, titleStyle,
      bodyStyle, bodyProps, getScrollViewRef, refreshing, onRefresh
    } = this.props
    return (
      <View style={[styles.container, style]}>
        <Header
          style={[styles.header, headerStyle]}
          inverse={reverse ? !isScrolled : isScrolled}
          title={title}
          titleStyle={titleStyle}
          onBackPress={onBackPress}
        />
        <Body
          getScrollViewRef={getScrollViewRef}
          bodyStyle={bodyStyle}
          bodyProps={bodyProps}
          refreshing={refreshing}
          onRefresh={onRefresh}
          handleScroll={this.handleScroll}
        >
          {children}
        </Body>
      </View>
    )
  }
}

const SecondaryScreen = styled(Base)`
  ${base}
`
SecondaryScreen.defaultProps = defaultProps

export default SecondaryScreen
