/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Avatar from '../index.js'

describe('Avatar.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Avatar />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `borderRadius:5`', () => {
    const wrapper = shallow(
      <Avatar borderRadius={5} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `name:foo`', () => {
    const wrapper = shallow(
      <Avatar name='foo' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `label:boo`', () => {
    const wrapper = shallow(
      <Avatar label='boo' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `labelStyle`', () => {
    const wrapper = shallow(
      <Avatar labelStyle={{ backgroundColor: 'white' }} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `labelTextStyle`', () => {
    const wrapper = shallow(
      <Avatar labelTextStyle={{ color: 'white' }} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `nameStyle`', () => {
    const wrapper = shallow(
      <Avatar nameStyle={{ backgroundColor: 'white' }} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `nameTextStyle`', () => {
    const wrapper = shallow(
      <Avatar nameTextStyle={{ color: 'white' }} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `size:small`', () => {
    const wrapper = shallow(
      <Avatar size='small' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
