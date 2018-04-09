/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import { shallow } from 'enzyme'
import { StateProvider } from '../base'
import Modal, { StyledModal } from '../index.js'
import Text from '../../Text'

describe('Modal.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Modal><Text>Content</Text></Modal>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `isOpen` changed to true', () => {
    const wrapper = shallow(
      <Modal isOpen={false}><Text>Content</Text></Modal>
      , { lifecycleExperimental: true })
    wrapper.setProps({ isOpen: true })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Modal.StateProvider.web', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <StateProvider>
        <Text>Child</Text>
      </StateProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `isOpen` changed to true', () => {
    const wrapper = shallow(
      <StateProvider isOpen={false}>
        <Text>Child</Text>
      </StateProvider>
      , { lifecycleExperimental: true })
    wrapper.setProps({ isOpen: true })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `isOpen` changed to false', () => {
    const wrapper = shallow(
      <StateProvider isOpen>
        <Text>Child</Text>
      </StateProvider>
      , { lifecycleExperimental: true })
    jest.useFakeTimers()
    wrapper.setProps({ isOpen: false })
    jest.runAllTimers()
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `isOpen` unchanged', () => {
    const wrapper = shallow(
      <StateProvider isOpen>
        <Text>Child</Text>
      </StateProvider>
      , { lifecycleExperimental: true })
    wrapper.setProps({ isOpen: true })
    wrapper.update()
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

  it('renders a snapshot with `isOpening`', () => {
    const wrapper = shallow(
      <StyledModal isOpening><Text>Content</Text></StyledModal>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
