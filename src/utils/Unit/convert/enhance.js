import { unless, contains, __ } from 'ramda'

export const ignorePercentage = unless(contains('%'), __)
export const ignoreAuto = unless(contains('auto'), __)

export default {
  ignorePercentage,
  ignoreAuto
}
