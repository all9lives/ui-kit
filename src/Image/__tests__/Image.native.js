/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Image, { Base, Styled } from '../index.ios.js'

const diveToBase = wrapper => wrapper.find(Styled).dive().find(Base).dive()

describe('Image.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Image />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with string `src`', () => {
    const wrapper = shallow(
      <Image src='https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/web.png' />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with string `source`', () => {
    const wrapper = shallow(
      <Image source='https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/web.png' />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with number `src`', () => {
    const wrapper = shallow(
      <Image src={123} />
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with number `source`', () => {
    const wrapper = shallow(
      <Image source={123} />
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
