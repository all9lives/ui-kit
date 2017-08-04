/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Image from '../index.ios.js'

describe('Image.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Image />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `src`', () => {
    const wrapper = shallow(
      <Image src='https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/web.png' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `fit:cover`', () => {
    const wrapper = shallow(
      <Image fit='cover' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `size:100`', () => {
    const wrapper = shallow(
      <Image size={100} />
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('renders a snapshot with `width:100`', () => {
    const wrapper = shallow(
      <Image width={100} />
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('renders a snapshot with `height:100`', () => {
    const wrapper = shallow(
      <Image height={100} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
