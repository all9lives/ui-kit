/* eslint-env jest */
import { invert } from '../Color'

describe('Color', () => {
  it('inverts hex color correctly', () => {
    const result = invert('#282828')
    expect(result).toMatchSnapshot()
  })

  it('inverts 3 digits hex color correctly', () => {
    const result = invert('#ccc')
    expect(result).toMatchSnapshot()
  })

  it('inverts hex color even without hash', () => {
    const result = invert('ccc')
    expect(result).toMatchSnapshot()
  })

  it('inverts black and white correctly', () => {
    const result = invert('fff', true)
    expect(result).toMatchSnapshot()
  })

  it('does not handle incorrect digits hex color', () => {
    try {
      invert('#1234567')
    } catch (e) {
      expect(e).toMatchSnapshot()
    }
  })
})
