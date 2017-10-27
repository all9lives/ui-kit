/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import FadeInView from '../index.ios.js'
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

describe('FadeInView.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <FadeInView>
        <Text>Apple</Text>
      </FadeInView>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `delay:3000`', () => {
    const wrapper = shallow(
      <FadeInView delay={3000}>
        <Text>Apple</Text>
      </FadeInView>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `duration:1000`', () => {
    const wrapper = shallow(
      <FadeInView duration={1000}>
        <Text>Apple</Text>
      </FadeInView>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot after delay', () => {
    jest.useFakeTimers()
    const wrapper = shallow(
      <FadeInView>
        <Text>Apple</Text>
      </FadeInView>
    )
    jest.runAllTimers()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })
})
