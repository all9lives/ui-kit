/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Modal from '../index.ios.js'
import Text from '../../Text'

describe('Modal.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Modal><Text>Content</Text></Modal>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
