/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../index.ios.js'

describe('MyComponent.native', () => {
  it('renders a snapshot for `MyComponent` on `native`', () => {
    const wrapper = shallow(
      <MyComponent>Apple</MyComponent>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
