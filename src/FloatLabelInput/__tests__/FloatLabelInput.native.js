/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import FloatLabelInput, { Container, AnimatedInput, AnimatedLabel } from '../index.ios.js'

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

describe('FloatLabelInput.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <FloatLabelInput />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleFocus`', () => {
    const wrapper = shallow(
      <FloatLabelInput onFocus={() => 'onFocused'} />
    )
    wrapper.instance().handleFocus()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot without `onFocus`', () => {
    const wrapper = shallow(
      <FloatLabelInput />
    )
    wrapper.instance().handleFocus()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `handleBlur`', () => {
    const wrapper = shallow(
      <FloatLabelInput onBlur={() => 'onBlurred'} />
    )
    wrapper.instance().handleBlur()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot without `onBlur`', () => {
    const wrapper = shallow(
      <FloatLabelInput />
    )
    wrapper.instance().handleBlur()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })
})

describe('FloatLabelInput.AnimatedLabel.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <AnimatedLabel />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `show`', () => {
    const wrapper = shallow(
      <AnimatedLabel />
      , { lifecycleExperimental: true })
    wrapper.setProps({ show: true })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `show` changing to `show:false`', () => {
    const wrapper = shallow(
      <AnimatedLabel show />
      , { lifecycleExperimental: true })
    wrapper.setProps({ show: false })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `show` unchanged', () => {
    const wrapper = shallow(
      <AnimatedLabel show />
      , { lifecycleExperimental: true })
    wrapper.setProps({ show: true })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })
})

describe('FloatLabelInput.Container.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Container />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('FloatLabelInput.AnimatedInput.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <AnimatedInput />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `value:undefined` changing to `value:bar`', () => {
    const wrapper = shallow(
      <AnimatedInput />
    )
    wrapper.setProps({ value: 'foo' })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `value:foo`', () => {
    const wrapper = shallow(
      <AnimatedInput value='foo' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `value:foo` changing to `value:empty`', () => {
    const wrapper = shallow(
      <AnimatedInput value='foo' />
    )
    wrapper.setProps({ value: '' })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `value:foo` unchanged', () => {
    const wrapper = shallow(
      <AnimatedInput value='foo' />
    )
    wrapper.setProps({ value: 'foo' })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })
})
