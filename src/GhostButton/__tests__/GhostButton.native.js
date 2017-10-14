/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import GhostButton from '../index.ios.js'

describe('GhostButton.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <GhostButton>Apple</GhostButton>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
