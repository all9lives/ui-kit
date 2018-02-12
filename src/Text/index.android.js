import styled from 'styled-components/native'
import base from './base'
import defaultProps from './defaultProps'
import Size from '../utils/Size'

const getLineHeight = (props) => {
  if (props.content) {
    return Size.spacing * 2.5
  }
  if (props.size === 'title') {
    return Size.spacing * 3
  }
  return Size.spacing * 2
}

const Text = styled.Text`
  ${base}
  line-height: ${props => getLineHeight(props)};
`
Text.defaultProps = defaultProps

export default Text
