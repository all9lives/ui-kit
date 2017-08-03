/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import MyComponent from '../index.js'

describe('MyComponent.web', () => {
  it('renders a snapshot for `MyComponent` on `web`', () => {
    const wrapper = shallow(
      <MyComponent>Apple</MyComponent>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
