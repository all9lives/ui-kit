/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Component from '../index.ios.js'

describe('Component.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Component>Apple</Component>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
