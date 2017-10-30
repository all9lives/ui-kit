import Color from '../utils/Color'

export const attrs = {
  color: props => props.primary
    ? Color.primary
    : (Color[props.color] || props.color || Color.black)
}
