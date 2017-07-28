import { configure } from '@storybook/react';

function loadStories() {
  require('../../stories/preface');
}

configure(loadStories, module);
