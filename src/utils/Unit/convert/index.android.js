import R from 'ramda'
import { ignorePercentage, ignoreAuto } from './enhance'

const transform = value => `${value}px`

export default (unit, converter = R.identity) => ignoreAuto(ignorePercentage)(transform)(converter(unit))
