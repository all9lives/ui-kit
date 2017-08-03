/* eslint-env jest */
import convert from '../index.android.js'

describe('Unit.convert.native', () => {
  it('converts numbers to values in `number` unit', () => {
    expect(convert(16)).toMatchSnapshot()
  })

  it('does not convert percentage value', () => {
    expect(convert('10%')).toMatchSnapshot()
  })
})
