import React from 'react'
import createStory from '../../storybook/createStory'
import Toggle from '../../src/Toggle'

createStory('Toggle', module)
  .add('default', () => <Toggle />)
  .add('with tight', () => <Toggle tight />)
  .add('with reverse', () => <Toggle reverse />)
  .add('with label:Toggle', () => <Toggle label='Toggle' />)
  .add('with labelStyle', () => <Toggle labelStyle={{ color: 'blue' }} />)
  .add('with toggleStyle', () => <Toggle toggleStyle={{ backgroundColor: 'blue' }} />)
