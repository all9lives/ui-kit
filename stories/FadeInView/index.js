import React from 'react'
import createStory from '../../storybook/createStory'
import FadeInView from '../../src/FadeInView'
import Text from '../../src/Text'

createStory('FadeInView', module)
  .add('default', () =>
    <FadeInView>
      <Text>Apple</Text>
    </FadeInView>
  )
  .add('delay:3000', () =>
    <FadeInView delay={3000}>
      <Text>Apple</Text>
    </FadeInView>
  )
  .add('duration:3000', () =>
    <FadeInView duration={3000}>
      <Text>Apple</Text>
    </FadeInView>
  )
