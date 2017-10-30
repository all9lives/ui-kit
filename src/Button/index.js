import styled from 'styled-components'
import { invert } from '../utils/Color'
import base, { attrs } from './base'
import defaultProps from './defaultProps'

const Button = styled.button.attrs({
  ...attrs,
  children: props => (props.children || props.title),
  onClick: props => (props.onClick || props.onPress)
})`
  ${base}
  background: none;
  border: 0;
  font: inherit;
  line-height: normal;
  overflow: visible;
  user-select: none;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  color: ${props => invert(props.color, true)};
  background-color: ${props => props.color};
  opacity: ${props => props.disabled ? '0.4' : 1};

  :active {
    transform: translate3d(1px, 1px, 0);
  }
`
Button.defaultProps = defaultProps

export default Button
