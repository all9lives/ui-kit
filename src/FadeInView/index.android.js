import React, { Component } from 'react'
import { Animated } from 'react-native'
import defaultProps from './defaultProps'

class FadeInView extends Component {
  static defaultProps = defaultProps
  animatedOpacity = new Animated.Value(0)
  componentDidMount () {
    const { delay, duration } = this.props
    this.timeout = setTimeout(() => {
      Animated.timing(this.animatedOpacity, {
        toValue: 1,
        duration
      }).start()
    }, delay)
  }
  componentWillUnmount () {
    clearTimeout(this.timeout)
  }
  render () {
    const { children } = this.props
    return (
      <Animated.View style={{ opacity: this.animatedOpacity }}>
        {children}
      </Animated.View>
    )
  }
}

export default FadeInView
