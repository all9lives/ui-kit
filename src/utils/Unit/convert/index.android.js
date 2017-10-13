import { identity } from 'ramda'
import { ignorePercentage, ignoreAuto } from './enhance'

const transform = value => `${value}px`

export default (unit, converter = identity) => ignoreAuto(ignorePercentage)(transform)(converter(unit))
