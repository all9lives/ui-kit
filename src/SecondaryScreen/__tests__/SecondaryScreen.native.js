/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import SecondaryScreen from '../index.ios.js'
import Text from '../../Text'

describe('SecondaryScreen.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <SecondaryScreen><Text>SecondaryScreen</Text></SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `title:MyTitle`', () => {
    const wrapper = shallow(
      <SecondaryScreen title='MyTitle'>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `actionButtons`', () => {
    const wrapper = shallow(
      <SecondaryScreen actionButtons={[<Text>1</Text>, <Text>2</Text>]}>
        <Text>SecondaryScreen</Text>
      </SecondaryScreen>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
