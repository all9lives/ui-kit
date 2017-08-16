import React from 'react'
import { action } from '@storybook/addon-actions'
import createStory from '../../storybook/createStory'
import Text from '../../src/Text'
import View from '../../src/View'

const squareStyle = { width: 200, height: 200, backgroundColor: 'white' }

createStory('Text', module)
  .add('with Apple', () => <Text>Apple</Text>)
  .add('with Banana', () => <Text>Banana</Text>)
  .add('with size `tiny`', () => <Text size='tiny'>Tiny</Text>)
  .add('with size `large`', () => <Text size='large'>Large</Text>)
  .add('with color `white`', () => <Text color='white'>White</Text>)
  .add('with color `primary`', () => <Text color='primary'>Primary</Text>)
  .add('with margin `tiny`', () => (
    <View>
      <Text margin='tiny'>Margin Tiny</Text>
      <Text margin='tiny'>Margin Tiny</Text>
    </View>
  ))
  .add('with margin `large`', () => (
    <View>
      <Text margin='large'>Margin Large</Text>
      <Text margin='large'>Margin Large</Text>
    </View>
  ))
  .add('with alignSelf `center`', () => (
    <View style={squareStyle}>
      <Text alignSelf='center'>Align Center</Text>
    </View>
  ))
  .add('with onPress', () => (
    <Text onPress={action('Pressed')}>Press Me</Text>
  ))
