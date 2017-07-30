/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import View from '../index.ios.js'

it('renders a snapshot for `View` with `direction:row` on `native`', () => {
  const wrapper = shallow(
    <View direction='row' />
  )
  expect(wrapper).toMatchSnapshot()
})
