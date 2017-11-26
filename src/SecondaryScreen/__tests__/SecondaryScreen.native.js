/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import SecondaryScreen, { Base, Header } from '../index.ios.js'
import Text from '../../Text'

jest.mock('Animated', () => {
  const ActualAnimated = require.requireActual('Animated')
  return {
    ...ActualAnimated,
    timing: (value, config) => {
      return {
        start: (callback) => {
          value.setValue(config.toValue)
          callback && callback()
        }
      }
    }
  }
})

const diveToBase = wrapper => wrapper.find(Base).dive()

describe('SecondaryScreen.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <SecondaryScreen><Text>SecondaryScreen</Text></SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `title:MyTitle`', () => {
    const wrapper = shallow(
      <SecondaryScreen title='MyTitle'>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `actionButtons`', () => {
    const wrapper = shallow(
      <SecondaryScreen actionButtons={[<Text>1</Text>, <Text>2</Text>]}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `onBackPress`', () => {
    const wrapper = shallow(
      <SecondaryScreen onBackPress={() => console.log('onBackPressed')}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `whiteStyle`', () => {
    const wrapper = shallow(
      <SecondaryScreen whiteStyle>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `style`', () => {
    const wrapper = shallow(
      <SecondaryScreen style={{ backgroundColor: 'black' }}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `headerStyle`', () => {
    const wrapper = shallow(
      <SecondaryScreen headerStyle={{ backgroundColor: 'black' }}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `bodyStyle`', () => {
    const wrapper = shallow(
      <SecondaryScreen bodyStyle={{ backgroundColor: 'black' }}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `onRefresh`', () => {
    const wrapper = shallow(
      <SecondaryScreen onRefresh={() => {}}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `refreshing`', () => {
    const wrapper = shallow(
      <SecondaryScreen refreshing>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `handleScroll:toggleHeader:true`', () => {
    const wrapper = shallow(
      <SecondaryScreen><Text>SecondaryScreen</Text></SecondaryScreen>
    )
    const baseWrapper = diveToBase(wrapper)
    baseWrapper.instance().handleScroll({ nativeEvent: { contentOffset: { y: 40 } } })
    baseWrapper.update()
    expect(baseWrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleScroll:toggleHeader:false`', () => {
    const wrapper = shallow(
      <SecondaryScreen><Text>SecondaryScreen</Text></SecondaryScreen>
    )
    const baseWrapper = diveToBase(wrapper)
    baseWrapper.instance().setState({ toggleHeader: true })
    baseWrapper.update()
    baseWrapper.instance().handleScroll({ nativeEvent: { contentOffset: { y: 30 } } })
    expect(baseWrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleScroll:nothing`', () => {
    const wrapper = shallow(
      <SecondaryScreen><Text>SecondaryScreen</Text></SecondaryScreen>
    )
    const baseWrapper = diveToBase(wrapper)
    baseWrapper.instance().handleScroll({ nativeEvent: { contentOffset: { y: 30 } } })
    expect(baseWrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `componentWillUpdate`', () => {
    const wrapper = shallow(
      <SecondaryScreen><Text>SecondaryScreen</Text></SecondaryScreen>
    )
    const baseWrapper = diveToBase(wrapper)
    baseWrapper.setState({ toggleHeader: false })
    baseWrapper.update()
    expect(baseWrapper).toMatchSnapshot()
  })
})

describe('SecondaryScreen.Header.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Header actionButtons={[]} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `toggleHeader:true`', () => {
    const wrapper = shallow(
      <Header toggleHeader actionButtons={[<Text>Action</Text>]} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `whiteStyle:true`', () => {
    const wrapper = shallow(
      <Header actionButtons={[]} whiteStyle />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
