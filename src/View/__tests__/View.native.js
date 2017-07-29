/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import View from '../index.ios.js'

it('render snapshot for `View` on `native`', () => {
  const wrapper = shallow(
    <View>Apple</View>
  )
  expect(wrapper).toMatchSnapshot()
})
