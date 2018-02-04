/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Component from '../index.js'

describe('Component.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Component>Apple</Component>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
