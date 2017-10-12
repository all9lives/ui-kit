/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Text from '../index.ios.js'

describe('Text.native', () => {
  it('renders a snapshot for `Text` on `native`', () => {
    const wrapper = shallow(
      <Text>Apple</Text>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot for `Text` with `size:small` on `native`', () => {
    const wrapper = shallow(
      <Text size='small'>Apple</Text>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot for `Text` with `color:blue` on `native`', () => {
    const wrapper = shallow(
      <Text color='blue'>Apple</Text>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `margin:0.5`', () => {
    const wrapper = shallow(
      <Text margin={0.5}>Apple</Text>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `alignSelf:center`', () => {
    const wrapper = shallow(
      <Text alignSelf='center'>Apple</Text>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('returns something when onPressed', () => {
    const wrapper = shallow(
      <Text onPress={() => 'onPressed'}>Text Button</Text>
    )
    const result = wrapper.props().onPress()
    expect(result).toEqual('onPressed')
  })
})
