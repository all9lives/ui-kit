import { StyledView, getStyled } from './index.android'
import { getComponent } from './base'
import defaultProps from './defaultProps'
import Color from '../utils/Color'

export const Checkbox = getStyled({
  onTintColor: Color.primary,
  thumbTintColor: Color.white,
  tintColor: Color.primary_light
})
Checkbox.defaultProps = defaultProps

export default getComponent({ View: StyledView, Checkbox })
