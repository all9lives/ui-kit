import convert from './convert'

const parse = (input) => {
  if (typeof input === 'number') {
    return convert(input)
  }
  const units = input.split(' ')
  return units.map(convert).join(' ')
}

export default {
  convert,
  parse
}
