import styled from 'styled-components'
import base, { attrs } from './base'
import defaultProps from './defaultProps'

const Image = styled.img.attrs(attrs)`
  ${base}
  object-fit: ${props => props.fit}
`
Image.defaultProps = {
  ...defaultProps
}

export default Image
