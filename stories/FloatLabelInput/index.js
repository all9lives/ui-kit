import React from 'react'
import createStory from '../../storybook/createStory'
import InputWrapper from '../../storybook/createStory/InputWrapper'
import FloatLabelInput from '../../src/FloatLabelInput'
import View from '../../src/View'

createStory('FloatLabelInput', module)
  .add('default', () => (
    <InputWrapper>
      <FloatLabelInput />
    </InputWrapper>
  ))
  .add('with labelColor', () => (
    <View width='100%'>
      <InputWrapper>
        <FloatLabelInput labelColor='green' />
      </InputWrapper>
      <InputWrapper>
        <FloatLabelInput labelColor='blue' />
      </InputWrapper>
    </View>
  ))
  .add('with labelFocusColor', () => (
    <InputWrapper>
      <FloatLabelInput labelFocusColor='green' />
    </InputWrapper>
  ))
