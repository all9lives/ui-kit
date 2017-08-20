/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Image, { Base, Styled } from '../index.js'

export const diveToBase = wrapper => wrapper.find(Styled).dive().find(Base).dive()

describe('Image.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Image />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `src`', () => {
    const wrapper = shallow(
      <Image src='any source' />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `source`', () => {
    const wrapper = shallow(
      <Image source='any source' />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `fit:cover`', () => {
    const wrapper = shallow(
      <Image fit='cover' />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `size:100`', () => {
    const wrapper = shallow(
      <Image size={100} />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `width:100`', () => {
    const wrapper = shallow(
      <Image width={100} />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `height:100`', () => {
    const wrapper = shallow(
      <Image height={100} />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })
})
