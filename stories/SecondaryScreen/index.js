import React from 'react'
import createStory from '../../storybook/createStory'
import ScreenStuff from '../../storybook/createStory/ScreenStuff'
import SecondaryScreen from '../../src/SecondaryScreen'
import Text from '../../src/Text'

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
