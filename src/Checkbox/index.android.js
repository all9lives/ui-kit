import styled from 'styled-components/native'
import base, { getComponent } from './base'
import defaultProps from './defaultProps'
import View from '../View'
import Color from '../utils/Color'

export const StyledView = styled(View)`
  flex-direction: row;
`

export const getStyled = attrs => styled.Switch.attrs(attrs)`
  ${base}
`

export const Checkbox = getStyled({
  onTintColor: props => (props.value ? Color.primary_light : undefined),
  thumbTintColor: props => (props.value ? Color.primary : Color.gray)
})
Checkbox.defaultProps = defaultProps

export default getComponent({ View: StyledView, Checkbox })
