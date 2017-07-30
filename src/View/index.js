import styled from 'styled-components'
import base from './base'
import defaultProps from './defaultProps'

const View = styled.div`
  ${base}
  display: flex;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`
View.defaultProps = {
  ...defaultProps,
  direction: 'row'
}

export default View
