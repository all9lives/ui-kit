import styled from 'styled-components/native'
import base from './base'
import defaultProps from './defaultProps'

const View = styled.View`
  ${base}
`
View.defaultProps = {
  ...defaultProps,
  direction: 'column'
}

export default View
