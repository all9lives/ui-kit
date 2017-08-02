/* eslint-env jest */
import convert from '../index.js'

it('converts numbers to values in `rem` unit', () => {
  expect(convert(16)).toMatchSnapshot()
})
