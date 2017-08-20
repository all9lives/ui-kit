import styled from 'styled-components/native'
import { Image as NativeImage } from 'react-native'
import base, { attrs, filtered } from './base'
import defaultProps from './defaultProps'
import { filterProps, mapProps } from '../utils/Misc'

const getRealSource = source => typeof source === 'string' ? { uri: source } : source

export const Base = filterProps(NativeImage, ['src', ...filtered])
Base.displayName = 'Image'

export const Styled = styled(Base).attrs(attrs)`
  ${base}
  resizeMode: ${props => props.fit};
`
Styled.defaultProps = {
  ...defaultProps,
  src: ''
}

const Image = mapProps(({ src, source, ...rest }) => ({
  ...rest,
  source: getRealSource(src || source)
}))(Styled)

export default Image
