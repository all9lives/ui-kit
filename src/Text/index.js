import styled from 'styled-components'
import base from './base'
import defaultProps from './defaultProps'
import Size from '../utils/Size'

const Text = styled.span.attrs({
  onClick: props => (props.onClick || props.onPress)
})`
  ${base}
  cursor: ${props => (props.onClick || props.onPress) ? 'pointer' : 'auto'};
  line-height: ${props => props.content ? Size.spacing * 2.5 : Size.spacing / 10};
  ${props => props.content ? 'line-height: 1.7; flex-wrap: wrap;' : ''}
`
Text.defaultProps = defaultProps

export default Text
