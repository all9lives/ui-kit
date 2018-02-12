/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import FloatLabelScreen, { Base, Header } from '../index.ios.js'
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

describe('FloatLabelScreen.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <FloatLabelScreen><Text>FloatLabelScreen</Text></FloatLabelScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `title:MyTitle`', () => {
    const wrapper = shallow(
      <FloatLabelScreen title='MyTitle'>
        <Text>FloatLabelScreen</Text>
      </FloatLabelScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `actionButtons`', () => {
    const wrapper = shallow(
      <FloatLabelScreen actionButtons={[<Text>1</Text>, <Text>2</Text>]}>
        <Text>FloatLabelScreen</Text>
      </FloatLabelScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `onBackPress`', () => {
    const wrapper = shallow(
      <FloatLabelScreen onBackPress={() => console.log('onBackPressed')}>
        <Text>FloatLabelScreen</Text>
      </FloatLabelScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `style`', () => {
    const wrapper = shallow(
      <FloatLabelScreen style={{ backgroundColor: 'black' }}>
        <Text>FloatLabelScreen</Text>
      </FloatLabelScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `headerStyle`', () => {
    const wrapper = shallow(
      <FloatLabelScreen headerStyle={{ backgroundColor: 'black' }}>
        <Text>FloatLabelScreen</Text>
      </FloatLabelScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `bodyStyle`', () => {
    const wrapper = shallow(
      <FloatLabelScreen bodyStyle={{ backgroundColor: 'black' }}>
        <Text>FloatLabelScreen</Text>
      </FloatLabelScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `onRefresh`', () => {
    const wrapper = shallow(
      <FloatLabelScreen onRefresh={() => {}}>
        <Text>FloatLabelScreen</Text>
      </FloatLabelScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `refreshing`', () => {
    const wrapper = shallow(
      <FloatLabelScreen refreshing>
        <Text>FloatLabelScreen</Text>
      </FloatLabelScreen>
    )
    expect(diveToBase(wrapper)).toMatchSnapshot()
  })

  it('renders a snapshot with `handleScroll:toggleHeader:true`', () => {
    const wrapper = shallow(
      <FloatLabelScreen><Text>FloatLabelScreen</Text></FloatLabelScreen>
    )
    const baseWrapper = diveToBase(wrapper)
    baseWrapper.instance().handleScroll({ nativeEvent: { contentOffset: { y: 40 } } })
    baseWrapper.update()
    expect(baseWrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleScroll:toggleHeader:false`', () => {
    const wrapper = shallow(
      <FloatLabelScreen><Text>FloatLabelScreen</Text></FloatLabelScreen>
    )
    const baseWrapper = diveToBase(wrapper)
    baseWrapper.instance().setState({ toggleHeader: true })
    baseWrapper.update()
    baseWrapper.instance().handleScroll({ nativeEvent: { contentOffset: { y: 30 } } })
    expect(baseWrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleScroll:nothing`', () => {
    const wrapper = shallow(
      <FloatLabelScreen><Text>FloatLabelScreen</Text></FloatLabelScreen>
    )
    const baseWrapper = diveToBase(wrapper)
    baseWrapper.instance().handleScroll({ nativeEvent: { contentOffset: { y: 30 } } })
    expect(baseWrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `componentWillUpdate`', () => {
    const wrapper = shallow(
      <FloatLabelScreen><Text>FloatLabelScreen</Text></FloatLabelScreen>
    )
    const baseWrapper = diveToBase(wrapper)
    baseWrapper.setState({ toggleHeader: false })
    baseWrapper.update()
    expect(baseWrapper).toMatchSnapshot()
  })
})

describe('FloatLabelScreen.Header.native', () => {
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
