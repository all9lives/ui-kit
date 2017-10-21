/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Icon from '../index.js'

describe('Icon.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Icon src='any source' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `size:large`', () => {
    const wrapper = shallow(
      <Icon src='any source' size='large' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `size:small`', () => {
    const wrapper = shallow(
      <Icon src='any source' size='small' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
