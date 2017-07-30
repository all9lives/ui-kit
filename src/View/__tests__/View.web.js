/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import View from '../index.js'

it('renders a snapshot for `View` with `direction:row` on `web`', () => {
  const wrapper = shallow(
    <View direction='row' />
  )
  expect(wrapper).toMatchSnapshot()
})
