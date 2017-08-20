import styled from 'styled-components'
import base, { attrs, filtered } from './base'
import defaultProps from './defaultProps'
import { filterProps, mapProps } from '../utils/Misc'

export const Base = filterProps('img', ['source', ...filtered])
Base.displayName = 'Image'

export const Styled = styled(Base).attrs(attrs)`
  ${base}
  object-fit: ${props => props.fit};
`
Styled.defaultProps = {
  ...defaultProps
}

const Image = mapProps(({ src, source, ...rest }) => ({
  ...rest,
  src: src || source
}))(Styled)

export default Image
