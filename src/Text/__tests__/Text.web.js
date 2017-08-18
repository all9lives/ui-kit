/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Text from '../index.js'

describe('Text.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Text>Apple</Text>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `size:tiny`', () => {
    const wrapper = shallow(
      <Text size='tiny'>Apple</Text>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `color:blue`', () => {
    const wrapper = shallow(
      <Text color='blue'>Apple</Text>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `margin:tiny`', () => {
    const wrapper = shallow(
      <Text margin='tiny'>Apple</Text>
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
    const result = wrapper.props().onClick()
    expect(result).toEqual('onPressed')
  })
})
