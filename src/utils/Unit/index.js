import R from 'ramda'
import convert from './convert'

const parse = (input, parser = R.identity) => {
  if (typeof input === 'number') {
    return convert(`${input}`, parser)
  }
  const units = input.split(' ')
  return units.map(unit => convert(unit, parser)).join(' ')
}

export default {
  convert,
  parse
}
