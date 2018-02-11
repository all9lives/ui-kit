import styled from 'styled-components/native'
import NativeImage from 'react-native-fast-image'
import base, { attrs, filtered } from './base'
import defaultProps from './defaultProps'
import { filterProps, mapProps } from '../utils/Misc'

const getRealSource = source => typeof source === 'string' ? { uri: source } : source

export const Base = filterProps(NativeImage, ['src', ...filtered])
Base.displayName = 'Image'

export const Styled = styled(Base).attrs(attrs)`
  ${base}
`
Styled.defaultProps = {
  ...defaultProps,
  src: ''
}

const Image = mapProps(({ src, source, fit, ...rest }) => ({
  ...rest,
  source: getRealSource(src || source),
  resizeMode: fit
}))(Styled)

export default Image
