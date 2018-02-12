import React, { PureComponent } from 'react'
import { css } from 'styled-components'
import Text from '../Text'
import View from '../View'
import { Checkbox } from '../Checkbox'

const base = css`
  position: relative;
`

export class Component extends PureComponent {
  handleValueChange = (value) => {
    if (this.props.onValueChange) {
      this.props.onValueChange(value)
    }
  }
  handleLabelPress = () => {
    if (this.props.onValueChange) {
      this.props.onValueChange(!this.props.value)
    }
  }
  render () {
    const { value, toggleStyle, label, labelStyle, tight, reverse } = this.props
    let [head, tail] = [
      <Text style={labelStyle} onPress={this.handleLabelPress}>{label}</Text>,
      <Checkbox style={toggleStyle} value={value} onValueChange={this.handleValueChange} />
    ]
    if (reverse) {
      [head, tail] = [tail, head]
    }
    return (
      <View align='middle' grow={1} direction='row'>
        {head}
        {!tight && <View grow={1} />}
        {tail}
      </View>
    )
  }
}

export default base
