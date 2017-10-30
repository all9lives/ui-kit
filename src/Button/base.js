import { css } from 'styled-components'
import Color from '../utils/Color'
import Unit from '../utils/Unit'
import Size from '../utils/Size'

export const attrs = {
  color: props => props.primary
    ? Color.primary
    : (Color[props.color] || props.color || Color.black)
}

const base = css`
  margin: ${props => Unit.parse(props.margin, (margin) => margin * Size.spacing)};
`

export default base
