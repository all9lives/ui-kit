import { css } from 'styled-components'
import Size from '../utils/Size'

export const attrs = {
  size: props => Size[props.size] || props.size
}

const base = css`
  position: relative;
`

export default base
