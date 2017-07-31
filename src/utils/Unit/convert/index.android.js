import _ from 'lodash'

export default (unit, converter = _.identity) => `${converter(unit)}px`
