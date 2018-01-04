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
  .add('with content', () => (
    <Text content>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat ante in velit condimentum dictum. Aenean eros lacus, ultrices at imperdiet eu, dapibus nec odio. Curabitur posuere eleifend diam vel feugiat. Maecenas vel urna sed ante rutrum vestibulum sit amet a odio. Vestibulum vitae eros non magna bibendum congue nec eget lectus. Sed eleifend euismod ex a pulvinar. Ut vitae mauris in lacus molestie ullamcorper. Etiam in magna ac ligula lobortis vehicula ac sit amet libero.

Ut faucibus lobortis erat, at rhoncus eros. Morbi posuere mollis interdum. Nunc faucibus tortor vitae felis elementum dignissim. Curabitur arcu orci, consectetur eu ipsum eget, convallis semper tellus. Proin varius ultrices nisl, ut porttitor ligula bibendum sit amet. Praesent porttitor ipsum purus, vel venenatis enim lacinia vitae. Fusce ac arcu eu odio pretium maximus. Mauris at lobortis ligula. Aenean sed vehicula magna. Aenean fringilla, tellus vel vestibulum pharetra, dolor mauris placerat urna, in fringilla lectus odio vel massa. Aliquam et magna nec mauris ultrices tincidunt sit amet eget est. Aliquam vulputate tellus et tristique venenatis. Curabitur sed consectetur mi, ac malesuada arcu. Donec pellentesque vehicula ante, quis commodo tortor fringilla at. Curabitur in lacus magna. Donec semper vehicula dui id tristique.`}</Text>
  ))
  .add('with bold', () => (
    <Text bold>Bold</Text>
  ))
