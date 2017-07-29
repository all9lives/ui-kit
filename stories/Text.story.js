import React from 'react'
import createStory from '../storybook/createStory'
import Text from '../src/Text'

createStory('Text', module)
  .add('with Apple', () => <Text>Apple</Text>)
  .add('with Banana', () => <Text>Banana</Text>)
  .add('with `tiny` size', () => <Text size='tiny'>Tiny</Text>)
  .add('with `large` size', () => <Text size='large'>Large</Text>)
  .add('with `white` color', () => <Text color='white'>White</Text>)
  .add('with `primary` color', () => <Text color='primary'>Primary</Text>)
