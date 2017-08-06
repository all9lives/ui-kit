import React from 'react'
import { action } from '@storybook/addon-actions'
import createStory from '../../storybook/createStory'
import Input from '../../src/Input'

createStory('Input', module)
  .add('with `placeholder:Your Name`', () => <Input placeholder='Your Name' />)
  .add('with `type:password`', () => <Input type='password' />)
  .add('with `type:number`', () => <Input type='number' />)
  .add('with `readOnly`', () => <Input readOnly />)
  .add('with `onChange`', () => <Input onChange={action('Input onChange')} />)
  .add('with `onChangeText`', () => <Input onChangeText={action('Input onChangeText')} />)
