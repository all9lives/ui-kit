import React from 'react'
import { action } from '@storybook/addon-actions'
import createStory from '../../storybook/createStory'
import ScreenStuff from '../../storybook/createStory/ScreenStuff'
import SecondaryScreen from '../../src/SecondaryScreen'
import Text from '../../src/Text'

export const main = () =>
createStory('SecondaryScreen', module)
  .add('default', () => (
    <SecondaryScreen>
      <ScreenStuff />
    </SecondaryScreen>
  ))
  .add('with title `MyTitle`', () => (
    <SecondaryScreen title='MyTitle'>
      <ScreenStuff />
    </SecondaryScreen>
  ))
  .add('with actionButtons', () => (
    <SecondaryScreen actionButtons={[
      <Text>Button 1</Text>,
      <Text>Button 2</Text>
    ]}>
      <ScreenStuff />
    </SecondaryScreen>
  ))
  .add('with style', () => (
    <SecondaryScreen style={{ backgroundColor: 'black' }}>
      <ScreenStuff />
    </SecondaryScreen>
  ))
  .add('with headerStyle', () => (
    <SecondaryScreen headerStyle={{ backgroundColor: 'black' }}>
      <ScreenStuff />
    </SecondaryScreen>
  ))
  .add('with bodyStyle', () => (
    <SecondaryScreen bodyStyle={{ backgroundColor: 'black' }}>
      <ScreenStuff />
    </SecondaryScreen>
  ))
  .add('with refreshing', () => (
    <SecondaryScreen refreshing>
      <ScreenStuff />
    </SecondaryScreen>
  ))
  .add('with onRefresh', () => (
    <SecondaryScreen onRefresh={action('PullToRefresh')}>
      <ScreenStuff />
    </SecondaryScreen>
  ))
  .add('with transparentHeader', () => (
    <SecondaryScreen transparentHeader>
      <ScreenStuff />
    </SecondaryScreen>
  ))

main()
