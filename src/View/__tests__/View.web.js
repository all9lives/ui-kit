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

  it('renders a snapshot with `margin:tiny`', () => {
    const wrapper = shallow(
      <View margin='tiny' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `padding:tiny`', () => {
    const wrapper = shallow(
      <View padding='tiny' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
