/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Button from '../index.ios.js'

describe('Button.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Button>Apple</Button>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `title:Press`', () => {
    const wrapper = shallow(
      <Button title='Press' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onPress`', () => {
    const wrapper = shallow(
      <Button onPress={() => {}} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `disabled`', () => {
    const wrapper = shallow(
      <Button disabled />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `primary`', () => {
    const wrapper = shallow(
      <Button primary />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `color:white`', () => {
    const wrapper = shallow(
      <Button color='white' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('triggers something when onPressed', () => {
    const wrapper = shallow(
      <Button />
    )
    wrapper.props().onPress()
  })

  it('returns something when onPressed', () => {
    const wrapper = shallow(
      <Button onPress={() => 'onPressed'} />
    )
    const result = wrapper.props().onPress()
    expect(result).toEqual('onPressed')
  })
})
