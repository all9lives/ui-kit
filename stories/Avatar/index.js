import React from 'react'
import createStory from '../../storybook/createStory'
import Avatar from '../../src/Avatar'

createStory('Avatar', module)
  .add('default', () => <Avatar />)
  .add('borderRadius:10', () => <Avatar borderRadius={10} />)
  .add('name:Jerry', () => <Avatar name='Jerry' />)
  .add('nameStyle', () => <Avatar name='Jerry' nameStyle={{ backgroundColor: 'red' }} />)
  .add('nameTextStyle', () => <Avatar name='Jerry' nameTextStyle={{ color: 'red' }} />)
  .add('label:Cool', () => <Avatar label='Cool' />)
  .add('labelStyle', () => <Avatar label='Cool' labelStyle={{ backgroundColor: 'black' }} />)
  .add('labelTextStyle', () => <Avatar label='Cool' labelTextStyle={{ color: 'red' }} />)
  .add('name:Jerry,label:Cool', () => <Avatar name='Jerry' label='Cool' />)
  .add('size:small', () => <Avatar size='small' />)
  .add('size:large', () => <Avatar size='large' />)
  .add('resizeMode:cover', () => <Avatar resizeMode='cover' />)
