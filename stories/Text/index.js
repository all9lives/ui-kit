import React from 'react'
import { action } from '@storybook/addon-actions'
import createStory from '../../storybook/createStory'
import Text from '../../src/Text'
import View from '../../src/View'

const squareStyle = { width: 200, height: 200, backgroundColor: 'white' }

createStory('Text', module)
  .add('with Apple', () => <Text>Apple</Text>)
  .add('with Banana', () => <Text>Banana</Text>)
  .add('with size `small`', () => <Text size='small'>Tiny</Text>)
  .add('with size `large`', () => <Text size='large'>Large</Text>)
  .add('with color `white`', () => <Text color='white'>White</Text>)
  .add('with color `primary`', () => <Text color='primary'>Primary</Text>)
  .add('with margin `0.5`', () => (
    <View>
      <Text margin={0.5}>Margin 0.5x</Text>
      <Text margin={0.5}>Margin 0.5x</Text>
    </View>
  ))
  .add('with margin `1 2`', () => (
    <View>
      <Text margin='1 2'>Margin 1x 2x</Text>
      <Text margin='1 2'>Margin 1x 2x</Text>
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
