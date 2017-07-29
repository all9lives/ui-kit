/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Text from '../index.js'

it('render snapshot for `Text` on `web`', () => {
  const wrapper = shallow(
    <Text>Apple</Text>
  )
  expect(wrapper).toMatchSnapshot()
})
