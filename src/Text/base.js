import { css } from 'styled-components'
import Unit from '../utils/Unit'
import Size from '../utils/Size'
import Color from '../utils/Color'

const base = css`
  font-size: ${props => Unit.convert(Size[props.size] || props.size)};
  color: ${props => Color[props.color] || props.color};
`

export default base
