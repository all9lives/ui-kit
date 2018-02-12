/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import SecondaryScreen, { Base, Header, Body } from '../index.ios.js'
import Text from '../../Text'

const diveToBase = wrapper => wrapper.find(Base).dive()
const diveToHeader = wrapper => wrapper.find(Base).dive().find(Header).dive()
const diveToBody = wrapper => wrapper.find(Base).dive().find(Body).dive()

describe('SecondaryScreen.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <SecondaryScreen><Text>SecondaryScreen</Text></SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with title', () => {
    const wrapper = shallow(
      <SecondaryScreen title='My Title'>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToHeader(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with reverse', () => {
    const wrapper = shallow(
      <SecondaryScreen reverse>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToHeader(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with onBackPress', () => {
    const wrapper = shallow(
      <SecondaryScreen onBackPress={() => {}}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToHeader(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with refreshing', () => {
    const wrapper = shallow(
      <SecondaryScreen refreshing>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBody(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with onRefresh', () => {
    const wrapper = shallow(
      <SecondaryScreen onRefresh={() => {}}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBody(wrapper)).toMatchSnapshot()
  })
})
