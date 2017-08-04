import styled from 'styled-components/native'
import base, { attrs } from './base'
import defaultProps from './defaultProps'

const Image = styled.Image.attrs({
  ...attrs,
  source: props => (typeof props.src === 'string' ? { uri: props.src } : props.src)
})`
  ${base}
  resizeMode: ${props => props.fit};
`
Image.defaultProps = {
  ...defaultProps,
  src: ''
}

export default Image
