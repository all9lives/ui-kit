import React from 'react'
import { action } from '@storybook/addon-actions'
import createStory from '../../storybook/createStory'
import ScreenStuff from '../../storybook/createStory/ScreenStuff'
import FloatLabelScreen from '../../src/FloatLabelScreen'
import Text from '../../src/Text'

export const main = (platform = 'android') =>
  createStory(`FloatLabelScreen-${platform}`, module)
    .add('default', () => (
      <FloatLabelScreen>
        <ScreenStuff />
      </FloatLabelScreen>
    ))
    .add('with title `MyTitle`', () => (
      <FloatLabelScreen title='MyTitle'>
        <ScreenStuff />
      </FloatLabelScreen>
    ))
    .add('with actionButtons', () => (
      <FloatLabelScreen actionButtons={[
        <Text>Button 1</Text>,
        <Text>Button 2</Text>
      ]}>
        <ScreenStuff />
      </FloatLabelScreen>
    ))
    .add('with style', () => (
      <FloatLabelScreen style={{ backgroundColor: 'black' }}>
        <ScreenStuff />
      </FloatLabelScreen>
    ))
    .add('with headerStyle', () => (
      <FloatLabelScreen headerStyle={{ backgroundColor: 'black' }}>
        <ScreenStuff />
      </FloatLabelScreen>
    ))
    .add('with bodyStyle', () => (
      <FloatLabelScreen bodyStyle={{ backgroundColor: 'black' }}>
        <ScreenStuff />
      </FloatLabelScreen>
    ))
    .add('with refreshing', () => (
      <FloatLabelScreen refreshing>
        <ScreenStuff />
      </FloatLabelScreen>
    ))
    .add('with onRefresh', () => (
      <FloatLabelScreen onRefresh={action('PullToRefresh')}>
        <ScreenStuff />
      </FloatLabelScreen>
    ))
    .add('with transparentHeader', () => (
      <FloatLabelScreen transparentHeader>
        <ScreenStuff />
      </FloatLabelScreen>
    ))

main()
