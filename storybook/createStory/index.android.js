import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import CenterView from './CenterView';

addDecorator(getStory =>
  <CenterView>
    {getStory()}
  </CenterView>
);

export default storiesOf;
