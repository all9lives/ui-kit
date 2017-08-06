import styled from 'styled-components'
import borderBox from '../border-box'
import base from './base'
import defaultProps from './defaultProps'

const Input = styled.input.attrs({
  onChange: (props) => e => {
    if (props.onChangeText) {
      props.onChangeText(e.target.value)
    }
    if (props.onChange) {
      props.onChange(e)
    }
  }
})`
  ${base}
  padding: 0.5rem 0.3rem;
`.extend`
  ${borderBox}
`
Input.defaultProps = defaultProps

export default Input
