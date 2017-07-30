import React from 'react'
import createStory from '../../storybook/createStory'
import View from '../../src/View'
import Text from '../../src/Text'
import './align'

createStory('View.direction', module)
  .add('with direction `column`', () => (
    <View direction='column'>
      <Text>Row 1</Text>
      <Text>Row 2</Text>
    </View>
  ))
  .add('with direction `row`', () => (
    <View direction='row'>
      <Text>Column 1</Text>
      <Text>Column 2</Text>
    </View>
  ))
