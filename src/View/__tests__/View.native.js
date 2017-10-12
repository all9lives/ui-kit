/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import View from '../index.ios.js'

describe('View.native', () => {
  it('renders a snapshot with `direction:row`', () => {
    const wrapper = shallow(
      <View direction='row' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `align:top,left`', () => {
    const wrapper = shallow(
      <View align='top left' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `width:120`', () => {
    const wrapper = shallow(
      <View width={120} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `height:120`', () => {
    const wrapper = shallow(
      <View height={120} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `margin:10`', () => {
    const wrapper = shallow(
      <View margin={10} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `margin:\'1 2\'`', () => {
    const wrapper = shallow(
      <View margin='1 2' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `padding:10`', () => {
    const wrapper = shallow(
      <View padding={10} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
