import R from 'ramda'

export const ignorePercentage = R.unless(R.contains('%'), R.__)
export const ignoreAuto = R.unless(R.contains('auto'), R.__)

export default {
  ignorePercentage,
  ignoreAuto
}
