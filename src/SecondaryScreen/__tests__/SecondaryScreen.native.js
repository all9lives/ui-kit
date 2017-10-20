/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import SecondaryScreen from '../index.ios.js'
import Text from '../../Text'

describe('SecondaryScreen.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <SecondaryScreen><Text>SecondaryScreen</Text></SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `title:MyTitle`', () => {
    const wrapper = shallow(
      <SecondaryScreen title='MyTitle'>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `actionButtons`', () => {
    const wrapper = shallow(
      <SecondaryScreen actionButtons={[<Text>1</Text>, <Text>2</Text>]}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onBackPress`', () => {
    const wrapper = shallow(
      <SecondaryScreen onBackPress={() => console.log('onBackPressed')}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `whiteBackIcon`', () => {
    const wrapper = shallow(
      <SecondaryScreen whiteBackIcon>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `style`', () => {
    const wrapper = shallow(
      <SecondaryScreen style={{ backgroundColor: 'black' }}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `headerStyle`', () => {
    const wrapper = shallow(
      <SecondaryScreen headerStyle={{ backgroundColor: 'black' }}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `bodyStyle`', () => {
    const wrapper = shallow(
      <SecondaryScreen bodyStyle={{ backgroundColor: 'black' }}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onRefresh`', () => {
    const wrapper = shallow(
      <SecondaryScreen onRefresh={() => {}}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `refreshing`', () => {
    const wrapper = shallow(
      <SecondaryScreen refreshing>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
