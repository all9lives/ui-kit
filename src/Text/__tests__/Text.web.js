/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Text from '../index.js'

it('renders a snapshot for `Text` on `web`', () => {
  const wrapper = shallow(
    <Text>Apple</Text>
  )
  expect(wrapper).toMatchSnapshot()
})

it('renders a snapshot for `Text` with `size:tiny` on `web`', () => {
  const wrapper = shallow(
    <Text size='tiny'>Apple</Text>
  )
  expect(wrapper).toMatchSnapshot()
})

it('renders a snapshot for `Text` with `color:blue` on `web`', () => {
  const wrapper = shallow(
    <Text color='blue'>Apple</Text>
  )
  expect(wrapper).toMatchSnapshot()
})
