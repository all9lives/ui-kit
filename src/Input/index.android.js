import styled from 'styled-components/native'
import base from './base'
import defaultProps from './defaultProps'

const typeMapping = {
  number: 'numeric',
  password: 'default',
  email: 'email-address'
}

const Input = styled.TextInput.attrs({
  secureTextEntry: props => props.type === 'password',
  keyboardType: props => (typeMapping[props.type] || props.type),
  editable: props => !props.readOnly
})`
  ${base}
`
Input.defaultProps = defaultProps

export default Input
