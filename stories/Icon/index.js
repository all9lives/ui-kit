import React from 'react'
import createStory from '../../storybook/createStory'
import Icon from '../../src/Icon'

const sourceUrl = 'https://avatars0.githubusercontent.com/u/6601073?v=4&s=40'

createStory('Icon', module)
  .add('default', () => <Icon source={sourceUrl} />)
  .add('with size `large`', () => <Icon size='large' source={sourceUrl} />)
