/* eslint-env jest */
import Unit from '../index.js'

jest.mock('../convert', () => (n) => `proper-${n}`)

it('parses an number input into a proper output', () => {
  expect(Unit.parse(16)).toMatchSnapshot()
})

it('parses a string input into a proper output', () => {
  expect(Unit.parse('16 16')).toMatchSnapshot()
})
