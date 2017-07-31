/* eslint-env jest */
import convert from '../index.android.js'

it('converts numbers to values in `number` unit', () => {
  expect(convert(16)).toMatchSnapshot()
})
