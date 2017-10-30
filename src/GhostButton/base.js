import React, { Component } from 'react'
import Unit from '../utils/Unit'
import Color from '../utils/Color'
import Size from '../utils/Size'
import View from '../View'
import Text from '../Text'

export const StyledView = View.extend`
  border-style: solid;
  border-radius: ${Unit.convert(Size.title)};
  border-width: 1px;
  border-color: ${props => Color[props.color] || props.color};
  padding: ${`${Unit.convert(Size.spacing * 1.5)} ${Unit.convert(Size.spacing * 5)}`};
`

export const StyledText = Text.extend`
  color: ${props => Color[props.color] || props.color};
  background-color: transparent;
`

export class Base extends Component {
  render () {
    const { title, ...props } = this.props
    return (
      <StyledView {...props}>
        <StyledText {...props}>
          {title}
        </StyledText>
      </StyledView>
    )
  }
}
