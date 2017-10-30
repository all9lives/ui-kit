import { css } from 'styled-components'
import React, { Component } from 'react'
import Unit from '../utils/Unit'
import Size from '../utils/Size'
import Color from '../utils/Color'
import View from '../View'
import Image from '../Image'
import Text from '../Text'

const SIZE_MAPPING = {
  small: 2,
  regular: 3,
  large: 4
}

export const Label = View.extend`
  position: absolute;
  border-radius: ${Unit.parse(3)};
  padding: ${Unit.parse(Size.spacing * 0.3)};
  background-color: ${Color.primary_light};
  right: ${Unit.parse(Size.spacing * 0.1)};
  bottom: ${props => props.name ? Unit.parse(Size.spacing * 2) : Unit.parse(Size.spacing * 0.1)};
`

export const LabelText = Text.extend`
  font-size: ${Unit.parse(Size.small)};
  color: ${Color.white};
`

export const Name = View.extend`
  margin-top: ${Unit.parse(Size.spacing * 0.5)};
  background-color: ${Color.gray};
  border-radius: ${Unit.parse(Size.small)};
  align-items: center;
  justify-content: center;
`

export const NameText = Text.extend`
  font-size: ${Unit.parse(Size.small)};
  color: ${Color.white};
`

export class Base extends Component {
  static defaultProps = {
    source: require('../assets/avatar-cat.jpg')
  }
  renderLabel = ({ label, name, labelStyle, labelTextStyle }) => (
    <Label name={name} style={labelStyle}>
      <LabelText style={labelTextStyle}>{label}</LabelText>
    </Label>
  )
  renderName = ({ name, nameStyle, nameTextStyle }) => (
    <Name style={nameStyle}>
      <NameText style={nameTextStyle}>{name}</NameText>
    </Name>
  )
  render () {
    const { size, source, name, label, borderRadius } = this.props
    return (
      <View direction='column' {...this.props}>
        <Image size={Size.icon * SIZE_MAPPING[size]} source={source} style={{ borderRadius }} />
        {name && this.renderName(this.props)}
        {label && this.renderLabel(this.props)}
      </View>
    )
  }
}

const base = css`
  position: relative;
`

export default base
