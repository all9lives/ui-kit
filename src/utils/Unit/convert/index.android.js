import R from 'ramda'
import { ignorePercentage } from './enhance'

const transform = value => `${value}px`

export default (unit, converter = R.identity) => ignorePercentage(transform)(converter(unit))
