/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Checkbox, { Checkbox as Input } from '../index.js'

describe('Checkbox.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Checkbox label='FOOBAR' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onValueChange`', () => {
    const wrapper = shallow(
      <Checkbox onValueChange={() => {}} />
    )
    wrapper.instance().handleValueChange(true)
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot without `onValueChange`', () => {
    const wrapper = shallow(
      <Checkbox />
    )
    wrapper.instance().handleValueChange(true)
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('triggers `handleLabelPress`', () => {
    let result = null
    const wrapper = shallow(
      <Checkbox value onValueChange={(e) => (result = e)} />
    )
    wrapper.instance().handleLabelPress()
    expect(result).toMatchSnapshot()
  })

  it('does not triggers `handleLabelPress`', () => {
    let result = null
    const wrapper = shallow(
      <Checkbox value />
    )
    wrapper.instance().handleLabelPress()
    expect(result).toMatchSnapshot()
  })
})

describe('Checkbox.Checkbox.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Input />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onChange`', () => {
    const wrapper = shallow(
      <Input />
    )
    wrapper.find('input').simulate('change', { target: { value: true } })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `value:true`', () => {
    const wrapper = shallow(
      <Input value />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onChange & onValueChange`', () => {
    const wrapper = shallow(
      <Input onValueChange={() => {}} />
    )
    wrapper.find('input').simulate('change', { target: { value: true } })
    expect(wrapper).toMatchSnapshot()
  })
})
