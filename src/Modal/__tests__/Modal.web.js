/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import Modal, { StyledModal } from '../index.js'
import Text from '../../Text'

describe('Modal.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Modal><Text>Content</Text></Modal>
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Modal.styled.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <StyledModal><Text>Content</Text></StyledModal>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
