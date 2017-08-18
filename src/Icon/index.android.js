import styled from 'styled-components/native'
import base, { attrs } from './base'
import defaultProps from './defaultProps'
import Image from '../Image'

const Icon = styled(Image).attrs(attrs)`
  ${base}
`
Icon.defaultProps = defaultProps

export default Icon
