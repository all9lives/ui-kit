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
})
