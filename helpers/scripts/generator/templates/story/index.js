import React from 'react'
import createStory from '../../storybook/createStory'
import MyComponent from '../../src/MyComponent'

createStory('MyComponent', module)
  .add('with Apple', () => <MyComponent>Apple</MyComponent>)
  .add('with Banana', () => <MyComponent>Banana</MyComponent>)
