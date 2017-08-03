import R from 'ramda'

export const ignorePercentage = R.unless(R.contains('%'), R.__)

export default {
  ignorePercentage
}
