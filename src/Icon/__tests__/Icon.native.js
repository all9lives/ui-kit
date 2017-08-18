/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Icon from '../index.ios.js'

describe('Icon.native', () => {
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
})
