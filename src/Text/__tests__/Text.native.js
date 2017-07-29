/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Text from '../index.ios.js'

it('render snapshot for `Text` on `native`', () => {
  const wrapper = shallow(
    <Text>Apple</Text>
  )
  expect(wrapper).toMatchSnapshot()
})
