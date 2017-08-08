/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Input from '../index.js'

describe('Input.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Input />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `placeholder:Placeholder`', () => {
    const wrapper = shallow(
      <Input placeholder='Placeholder' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `type:password`', () => {
    const wrapper = shallow(
      <Input type='password' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `readOnly`', () => {
    const wrapper = shallow(
      <Input readOnly />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onChange`', () => {
    const wrapper = shallow(
      <Input onChange={() => {}} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onChangeText`', () => {
    const wrapper = shallow(
      <Input onChangeText={() => {}} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('triggers onChange without passing functions', () => {
    const wrapper = shallow(
      <Input />
    )
    const result = wrapper.props().onChange()
    expect(result).toMatchSnapshot()
  })

  it('triggers onChange', () => {
    const wrapper = shallow(
      <Input onChange={() => 'onChanged'} />
    )
    const result = wrapper.props().onChange()
    expect(result).toMatchSnapshot()
  })

  it('triggers onChangeText', () => {
    const wrapper = shallow(
      <Input onChangeText={() => 'onChangedText'} />
    )
    const result = wrapper.props().onChange({ target: { value: 'onChangedText' } })
    expect(result).toMatchSnapshot()
  })
})
