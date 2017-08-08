import styled from 'styled-components/native'
import base, { attrs } from './base'
import defaultProps from './defaultProps'

const Button = styled.Button.attrs({
  ...attrs,
  title: props => (props.children || props.title)
})`
  ${base}
`
Button.defaultProps = defaultProps

export default Button
