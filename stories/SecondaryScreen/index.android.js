import React from 'react'
import { action } from '@storybook/addon-actions'
import createStory from '../../storybook/createStory'
import SecondaryScreen from '../../src/SecondaryScreen'
import ScreenStuff from '../../storybook/createStory/ScreenStuff'

export const main = (platform = 'android') =>
  createStory(`SecondaryScreen-${platform}`, module)
    .add('default', () => (
      <SecondaryScreen>
        <ScreenStuff />
      </SecondaryScreen>
    ))
    .add('with title', () => (
      <SecondaryScreen title='My SecondaryScreen'>
        <ScreenStuff />
      </SecondaryScreen>
    ))
    .add('with reverse', () => (
      <SecondaryScreen reverse>
        <ScreenStuff />
      </SecondaryScreen>
    ))
    .add('with onBackPress', () => (
      <SecondaryScreen onBackPress={action('Pressed')}>
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

main()
