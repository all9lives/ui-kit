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
  .add('with `color:success`', () =>
    <Button color='success' />
  )
  .add('with `color:white`', () =>
    <Button color='white' />
  )
  .add('with `margin:2`', () =>
    <Button margin={2} />
  )
  .add('with `margin:2 1`', () =>
    <Button margin='2 1' />
  )
  .add('with `style`', () =>
    <Button style={{ width: 200, alignItems: 'center' }} />
  )
  .add('with `padding`', () =>
    <Button padding='2 3' />
  )
