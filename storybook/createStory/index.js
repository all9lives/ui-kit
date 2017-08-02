import React from 'react'
import { storiesOf } from '@storybook/react'
import CenterView from './CenterView'

export default (Component, module) => storiesOf(Component, module)
  .addDecorator(getStory =>
    <CenterView>
      {getStory()}
    </CenterView>
  )
