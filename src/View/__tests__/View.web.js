/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import View from '../index.js'

describe('View.web', () => {
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

  it('renders a snapshot with `fullWidth`', () => {
    const wrapper = shallow(
      <View fullWidth />
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

  it('renders a snapshot with `margin:0.5`', () => {
    const wrapper = shallow(
      <View margin={0.5} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `padding:0.5`', () => {
    const wrapper = shallow(
      <View padding={0.5} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `grow:1`', () => {
    const wrapper = shallow(
      <View grow={1} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
