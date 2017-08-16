/* eslint-env jest */
import React from 'react'
import { Switch as NativeSwitch } from 'react-native'
import { shallow } from 'enzyme'
import Checkbox, { Checkbox as SwitchIOS } from '../index.ios.js'
import { Checkbox as SwitchAndroid } from '../index.android.js'

describe('Checkbox.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Checkbox label='FOOBAR' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onValueChange`', () => {
    const wrapper = shallow(
      <Checkbox onValueChange={() => {}} />
    )
    wrapper.instance().handleValueChange(true)
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot without `onValueChange`', () => {
    const wrapper = shallow(
      <Checkbox />
    )
    wrapper.instance().handleValueChange(true)
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('triggers `handleLabelPress`', () => {
    let result = null
    const wrapper = shallow(
      <Checkbox value onValueChange={(e) => (result = e)} />
    )
    wrapper.instance().handleLabelPress('LabelPressed')
    expect(result).toMatchSnapshot()
  })

  it('does not triggers `handleLabelPress`', () => {
    let result = null
    const wrapper = shallow(
      <Checkbox value />
    )
    wrapper.instance().handleLabelPress()
    expect(result).toMatchSnapshot()
  })
})

describe('Checkbox.Checkbox.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <SwitchIOS />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onChange`', () => {
    const wrapper = shallow(
      <SwitchIOS />
    )
    wrapper.find(NativeSwitch).simulate('change', { target: { value: true } })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onChange & onValueChange`', () => {
    const wrapper = shallow(
      <SwitchIOS onValueChange={() => {}} />
    )
    wrapper.find(NativeSwitch).simulate('change', { target: { value: true } })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `value:true`', () => {
    const wrapper = shallow(
      <SwitchAndroid value />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `value:false`', () => {
    const wrapper = shallow(
      <SwitchAndroid value={false} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
