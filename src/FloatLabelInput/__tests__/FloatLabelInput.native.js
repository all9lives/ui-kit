/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import FloatLabelInput from '../index.ios.js'

describe('FloatLabelInput.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <FloatLabelInput />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleFocus`', () => {
    const wrapper = shallow(
      <FloatLabelInput />
    )
    wrapper.instance().handleFocus()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleBlur`', () => {
    const wrapper = shallow(
      <FloatLabelInput />
    )
    wrapper.instance().handleFocus()
    wrapper.update()
    wrapper.instance().handleBlur()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })
})
