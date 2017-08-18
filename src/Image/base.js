import { css } from 'styled-components'
import Unit from '../utils/Unit'
import Size from '../utils/Size'

export const attrs = {
  width: props => (props.width || props.size),
  height: props => (props.height || props.size)
}

export const filtered = ['fit', 'size', 'height', 'width']

const base = css`
  width: ${props => Unit.convert(Size[props.width] || props.width)};
  height: ${props => Unit.convert(Size[props.height] || props.height)};
`

export default base
