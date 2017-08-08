import styled from 'styled-components'
import borderBox from '../border-box'
import base from './base'
import defaultProps from './defaultProps'

const Input = styled.input.attrs({
  onChange: props => props.onChange || (e => {
    if (props.onChangeText) {
      return props.onChangeText(e.target.value)
    }
  })
})`
  ${base}
  padding: 0.5rem 0.3rem;
`.extend`
  ${borderBox}
`
Input.defaultProps = defaultProps

export default Input
