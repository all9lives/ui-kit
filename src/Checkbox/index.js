import styled from 'styled-components'
import base, { getComponent } from './base'
import defaultProps from './defaultProps'
import View from '../View'

export const Checkbox = styled.input.attrs({
  onChange: props => (e) => {
    if (props.onValueChange) {
      props.onValueChange(e.target.checked)
    }
  },
  checked: props => props.value,
  type: 'checkbox'
})`
  ${base}
`
Checkbox.defaultProps = defaultProps

export default getComponent({ View, Checkbox })
