import { configure } from '@storybook/react';

function loadStories() {
  require('../../stories/web');
}

configure(loadStories, module);
