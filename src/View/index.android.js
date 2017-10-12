import styled from 'styled-components/native'
import { View as NativeView } from 'react-native'
import base from './base'
import defaultProps from './defaultProps'
import { filterProps } from '../utils/Misc'

export const Base = filterProps(NativeView, ['direction', 'margin', 'padding'])
Base.displayName = 'View'

const View = styled(Base)`
  ${base}
`
View.defaultProps = {
  ...defaultProps,
  direction: 'column'
}

export default View
