import R from 'ramda'

export default (unit, converter = R.identity) => `${converter(unit) / 16}rem`
