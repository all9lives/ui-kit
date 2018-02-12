import React from 'react'
import createStory from '../../storybook/createStory'
import Text from '../../src/Text'

createStory('FloatLabelScreen', module)
  .add('default', () => (
    <Text>
      It only supports native platform.
    </Text>
  ))
