import React from 'react'
import { action } from '@storybook/addon-actions'
import createStory from '../../storybook/createStory'
import GhostButton from '../../src/GhostButton'

createStory('GhostButton', module)
  .add('with Apple', () => <GhostButton title='Apple' />)
  .add('with onPress', () => <GhostButton onPress={action('Pressed')} />)
  .add('with color `white`', () => <GhostButton color='white' />)
