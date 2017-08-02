import styled from 'styled-components'
import Unit from '../utils/Unit'
import base from './base'
import defaultProps from './defaultProps'

const View = styled.div`
  ${base}
  display: flex;
  height: ${props => Unit.convert(props.height)};
  width: ${props => props.fullWidth ? '100%' : Unit.convert(props.width)};
`
View.defaultProps = {
  ...defaultProps,
  width: 'auto',
  height: 'auto',
  direction: 'row'
}

export default View
