import R from 'ramda'
import { ignorePercentage } from './enhance'

const transform = value => `${value / 16}rem`

export default (unit, converter = R.identity) => ignorePercentage(transform)(converter(unit))
