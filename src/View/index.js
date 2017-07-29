import styled from 'styled-components'
import base from './base'
import defaultProps from './defaultProps'

const View = styled.div`
  display: flex;
  ${base}
`
View.defaultProps = {
  ...defaultProps,
  direction: 'row'
}

export default View
