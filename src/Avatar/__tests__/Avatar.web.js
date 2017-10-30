/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Avatar from '../index.js'
import { Base, Label } from '../base'

const diveToBase = wrapper => wrapper.find(Base).dive()
const diveToLabel = wrapper => wrapper.find(Base).dive().find(Label).dive()

describe('Avatar.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Avatar>Apple</Avatar>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `borderRadius:5`', () => {
    const wrapper = shallow(
      <Avatar borderRadius={5} />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `name:foo`', () => {
    const wrapper = shallow(
      <Avatar name='foo' />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `label:boo`', () => {
    const wrapper = shallow(
      <Avatar label='boo' />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `label` without `name`', () => {
    const wrapper = shallow(
      <Avatar label='boo' />
    )
    expect(diveToLabel(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `label,name`', () => {
    const wrapper = shallow(
      <Avatar label='boo' name='bar' />
    )
    expect(diveToLabel(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `labelStyle`', () => {
    const wrapper = shallow(
      <Avatar labelStyle={{ backgroundColor: 'white' }} />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `labelTextStyle`', () => {
    const wrapper = shallow(
      <Avatar labelTextStyle={{ color: 'white' }} />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `nameStyle`', () => {
    const wrapper = shallow(
      <Avatar nameStyle={{ backgroundColor: 'white' }} />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `nameTextStyle`', () => {
    const wrapper = shallow(
      <Avatar nameTextStyle={{ color: 'white' }} />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `size:small`', () => {
    const wrapper = shallow(
      <Avatar size='small' />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })
})
