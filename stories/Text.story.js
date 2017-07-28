import React from 'react';
import createStory from '../storybook/createStory';
import Text from '../src/Text';

createStory('Text', module)
  .add('with Apple', () => <Text>Apple</Text>)
  .add('with Banana', () => <Text>Banana</Text>);
