/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import GhostButton from '../index.ios.js'
import { Base, StyledView, StyledText } from '../base'

const diveToView = wrapper => wrapper.find(Base).dive().find(StyledView).dive()
const diveToText = wrapper => wrapper.find(Base).dive().find(StyledText).dive()

describe('GhostButton.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <GhostButton>Apple</GhostButton>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `color:white`', () => {
    const wrapper = shallow(
      <GhostButton color='white'>Apple</GhostButton>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onPress`', () => {
    const wrapper = shallow(
      <GhostButton onPress={() => {}}>Apple</GhostButton>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `StyledView`', () => {
    const wrapper = shallow(
      <GhostButton />
    )
    expect(diveToView(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `StyledText`', () => {
    const wrapper = shallow(
      <GhostButton />
    )
    expect(diveToText(wrapper)).toMatchSnapshot()
  })
})
