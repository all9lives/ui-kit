/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Button, { StyledText, StyledView } from '../index.ios.js'

describe('Button.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Button>Apple</Button>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `title:Press`', () => {
    const wrapper = shallow(
      <Button title='Press' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onPress`', () => {
    const wrapper = shallow(
      <Button onPress={() => {}} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `disabled`', () => {
    const wrapper = shallow(
      <Button disabled />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `primary`', () => {
    const wrapper = shallow(
      <Button primary />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `color:white`', () => {
    const wrapper = shallow(
      <Button color='white' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('triggers something when onPressed', () => {
    const wrapper = shallow(
      <Button />
    )
    wrapper.props().onPress()
  })

  it('returns something when onPressed', () => {
    const wrapper = shallow(
      <Button onPress={() => 'onPressed'} />
    )
    const result = wrapper.props().onPress()
    expect(result).toEqual('onPressed')
  })
})

describe('Button.StyledView.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <StyledView />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `color:white`', () => {
    const wrapper = shallow(
      <StyledView color='white' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Button.StyledText.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <StyledText>Text</StyledText>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `color:white`', () => {
    const wrapper = shallow(
      <StyledText color='white'>Text</StyledText>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `title:Text`', () => {
    const wrapper = shallow(
      <StyledText title='Text' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
