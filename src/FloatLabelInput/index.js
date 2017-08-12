import styled from 'styled-components'
import base, { getComponent, labelBase, inputBase } from './base'
import View from '../View'
import BaseInput from '../Input'
import Text from '../Text'
import Unit from '../utils/Unit'

const getOpacity = (props) => {
  if (props.show) {
    return props.isFocus ? 1 : 0.5
  }
  return 0
}

const Container = styled(View)`
  ${base}
  width: 100%;
`

export const Label = styled(Text)`
  ${labelBase}
  position: absolute;
  z-index: 1;
  top: ${Unit.parse(2)};
  left: ${Unit.parse(8)};
  opacity: ${getOpacity};
  transform: ${props => props.show ? 'translateY(0)' : `translateY(${Unit.parse(8)})`};
  pointer-events: none;
  transition: 300ms ease-in;
  transition-property: transform, opacity, color;
`

export const Input = styled(BaseInput)`
  ${inputBase}
  padding-top: ${props => props.value ? Unit.parse(18) : Unit.parse(10)};
  padding-bottom: ${props => props.value ? Unit.parse(2) : Unit.parse(10)};
  transition: 300ms ease-in;
  transition-property: padding-top, padding-bottom;
`

export default getComponent({ Container, Label, Input })
