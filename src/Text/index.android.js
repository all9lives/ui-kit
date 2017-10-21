import styled from 'styled-components/native'
import base from './base'
import defaultProps from './defaultProps'
import Size from '../utils/Size'

const Text = styled.Text`
  ${base}
  line-height: ${props => props.content ? Size.spacing * 2.5 : Size.spacing * 2};
`
Text.defaultProps = defaultProps

export default Text
