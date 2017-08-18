import styled from 'styled-components'
import base from './base'
import defaultProps from './defaultProps'

const Text = styled.span.attrs({
  onClick: props => (props.onClick || props.onPress)
})`
  ${base}
  cursor: ${props => (props.onClick || props.onPress) ? 'pointer' : 'auto'};
`
Text.defaultProps = defaultProps

export default Text
