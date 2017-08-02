/* eslint-env jest */
import Unit from '../index.js'

jest.mock('../convert', () => (n, parser) => `proper-${parser(n)}`)

it('parses an number input into a proper output', () => {
  expect(Unit.parse(16)).toMatchSnapshot()
})

it('parses a string input into a proper output', () => {
  expect(Unit.parse('16 16')).toMatchSnapshot()
})

it('parses a string input with a parser into a proper output', () => {
  expect(Unit.parse('16 16', n => `parsed-${n}`)).toMatchSnapshot()
})
