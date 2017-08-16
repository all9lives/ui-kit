import React from 'react'
import createStory from '../../storybook/createStory'
import { CheckboxWrapper } from '../../storybook/createStory/InputWrapper'
import Checkbox from '../../src/Checkbox'

createStory('Checkbox', module)
  .add('with `label:Check me`', () => (
    <CheckboxWrapper>
      <Checkbox label='Check Me' />
    </CheckboxWrapper>
  ))
