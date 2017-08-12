/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import FloatLabelInput, { Label, Input } from '../index.js'

describe('FloatLabelInput.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <FloatLabelInput />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleFocus`', () => {
    const wrapper = shallow(
      <FloatLabelInput onFocus={() => 'onFocused'} />
    )
    wrapper.instance().handleFocus()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot without `onFocus`', () => {
    const wrapper = shallow(
      <FloatLabelInput />
    )
    wrapper.instance().handleFocus()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleBlur`', () => {
    const wrapper = shallow(
      <FloatLabelInput onBlur={() => 'onBlurred'} />
    )
    wrapper.instance().handleBlur()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot without `onBlur`', () => {
    const wrapper = shallow(
      <FloatLabelInput />
    )
    wrapper.instance().handleBlur()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })
})

describe('FloatLabelInput.Label.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Label />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `show`', () => {
    const wrapper = shallow(
      <Label show />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `show` and `isFocus`', () => {
    const wrapper = shallow(
      <Label show isFocus />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('FloatLabelInput.Input.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Input />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `value:foo`', () => {
    const wrapper = shallow(
      <Input value='foo' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
