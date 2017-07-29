/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import View from '../index.js'

it('render snapshot for `View` on `web`', () => {
  const wrapper = shallow(
    <View>Apple</View>
  )
  expect(wrapper).toMatchSnapshot()
})
