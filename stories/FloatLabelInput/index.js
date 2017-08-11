import React from 'react'
import createStory from '../../storybook/createStory'
import InputWrapper from '../../storybook/createStory/InputWrapper'
import FloatLabelInput from '../../src/FloatLabelInput'

createStory('FloatLabelInput', module)
  .add('default', () => (
    <InputWrapper>
      <FloatLabelInput />
    </InputWrapper>
  ))
