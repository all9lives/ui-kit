import React from 'react'
import { action } from '@storybook/addon-actions'
import createStory from '../../storybook/createStory'
import Button from '../../src/Button'

createStory('Button', module)
  .add('with `children:Apple`', () => <Button>Apple</Button>)
  .add('with `title:Banana`', () => <Button title='Banana' />)
  .add('with `onPress`', () =>
    <Button
      title='Press me'
      onPress={action('Pressed')}
    />
  )
  .add('with `disable:true`', () =>
    <Button disabled />
  )
  .add('with `primary`', () =>
    <Button primary />
  )
