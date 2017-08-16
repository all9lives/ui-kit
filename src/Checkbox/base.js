import React, { PureComponent } from 'react'
import { css } from 'styled-components'
import Unit from '../utils/Unit'
import Spacing from '../utils/Spacing'
import Text from '../Text'

const base = css`
  position: relative;
  margin-right: ${Unit.convert(Spacing.regular)};
`

export const getComponent = ({ View, Checkbox }) => class Component extends PureComponent {
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
    const { value, label } = this.props
    return (
      <View align='middle'>
        <Checkbox value={value} onValueChange={this.handleValueChange} />
        <Text alignSelf='center' onPress={this.handleLabelPress}>{label}</Text>
      </View>
    )
  }
}

export default base
