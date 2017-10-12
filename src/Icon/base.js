import { css } from 'styled-components'
import Size from '../utils/Size'

export const attrs = {
  size: props => props.size || Size.icon
}

const base = css`
  position: relative;
`

export default base
