/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../index.js'

it('render snapshot for `MyComponent` on `web`', () => {
  const wrapper = shallow(
    <MyComponent>Apple</MyComponent>
  )
  expect(wrapper).toMatchSnapshot()
})
