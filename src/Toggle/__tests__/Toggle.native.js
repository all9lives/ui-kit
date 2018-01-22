/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Toggle from '../index.ios.js'

describe('Toggle.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Toggle />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with tight', () => {
    const wrapper = shallow(
      <Toggle tight />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with reverse', () => {
    const wrapper = shallow(
      <Toggle reverse />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with label:Toggle', () => {
    const wrapper = shallow(
      <Toggle label='Toggle' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot labelStyle', () => {
    const wrapper = shallow(
      <Toggle labelStyle={{ color: 'blue' }} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot toggleStyle', () => {
    const wrapper = shallow(
      <Toggle toggleStyle={{ backgroundColor: 'blue' }} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
