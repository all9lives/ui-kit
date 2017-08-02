import R from 'ramda'

export default (unit, converter = R.identity) => `${converter(unit)}px`
