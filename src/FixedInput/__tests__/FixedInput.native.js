/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import FixedInput from '../index.ios.js'

describe('FixedInput.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <FixedInput />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with show', () => {
    const wrapper = shallow(
      <FixedInput show />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with show and multiline', () => {
    const wrapper = shallow(
      <FixedInput show multiline />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with show and label', () => {
    const wrapper = shallow(
      <FixedInput show label='MyLabel' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with show and saveText', () => {
    const wrapper = shallow(
      <FixedInput show saveText='MySaveText' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with show and onRequestDismiss', () => {
    const wrapper = shallow(
      <FixedInput show onRequestDismiss={() => console.log('dismiss')} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
