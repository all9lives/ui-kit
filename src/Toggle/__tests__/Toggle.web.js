/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Toggle from '../index.js'

describe('Toggle.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Toggle />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
