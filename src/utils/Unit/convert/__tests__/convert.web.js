/* eslint-env jest */
import convert from '../index.js'

describe('Unit.convert.web', () => {
  it('converts numbers to values in `rem` unit', () => {
    expect(convert(16)).toMatchSnapshot()
  })

  it('does not convert percentage value', () => {
    expect(convert('10%')).toMatchSnapshot()
  })
})
