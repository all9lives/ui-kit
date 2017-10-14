/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import GhostButton from '../index.js'

describe('GhostButton.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <GhostButton>Apple</GhostButton>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
