import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import tinycolor from 'tinycolor2'
import { attrs } from './base'
import defaultProps from './defaultProps'
import Color from '../utils/Color'
import Size from '../utils/Size'

const StyledView = styled.View.attrs({
  ...attrs
})`
  background-color: ${props => props.color};
  padding: ${Size.spacing}px ${Size.spacing * 3}px;
  border-radius: ${Size.spacing * 2};
`

const StyledText = styled.Text.attrs({
  ...attrs
})`
  color: ${props => Color[tinycolor(props.color).getBrightness() < 200 ? 'white' : 'black']};
`

const Button = ({ onPress, children, title, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledView {...props}>
      <StyledText {...props}>
        {title || children}
      </StyledText>
    </StyledView>
  </TouchableOpacity>
)
Button.defaultProps = defaultProps

export default Button
