import React, { PureComponent } from 'react'
import styled from 'styled-components/native'
import { Animated } from 'react-native'
import base, { getComponent, labelBase, inputBase } from './base'
import View from '../View'
import BaseInput from '../Input'
import Text from '../Text'

export const Container = styled(View)`
  ${base}
`

const Label = styled(Text)`
  ${labelBase}
`

const Input = styled(Animated.createAnimatedComponent(BaseInput))`
  ${inputBase}
`

export class AnimatedLabel extends PureComponent {
  state = {
    value: new Animated.Value(0)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.show !== this.props.show) {
      Animated.timing(this.state.value, {
        toValue: nextProps.show ? 1 : 0,
        duration: 300
      }).start()
    }
  }
  render () {
    const { value } = this.state
    const position = {
      position: 'absolute',
      top: 2,
      left: 8
    }
    const translateY = value.interpolate({
      inputRange: [0, 1],
      outputRange: [8, 0]
    })
    return (
      <Animated.View style={{ opacity: value, transform: [{ translateY }], ...position }}>
        <Label {...this.props} />
      </Animated.View>
    )
  }
}

export class AnimatedInput extends PureComponent {
  state = {
    value: new Animated.Value(0)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      Animated.timing(this.state.value, {
        toValue: nextProps.value ? 1 : 0,
        duration: 300
      }).start()
    }
  }
  render () {
    const { value } = this.state
    const paddingTop = value.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 18]
    })
    const paddingBottom = value.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 2]
    })
    return (
      <Input style={{ paddingTop, paddingBottom }} {...this.props} />
    )
  }
}

export default getComponent({ Container, Label: AnimatedLabel, Input: AnimatedInput })
