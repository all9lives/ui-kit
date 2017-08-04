import React from 'react'
import createStory from '../../storybook/createStory'
import Image from '../../src/Image'

createStory('Image', module)
  .add('with fit `contain`', () =>
    <Image
      fit='contain'
      src='https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/web.png'
    />
  )
  .add('with fit `cover`', () =>
    <Image
      fit='cover'
      src='https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/web.png'
    />
  )
  .add('with size `200`', () =>
    <Image
      size={200}
      src='https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/web.png'
    />
  )
  .add('with width `300`, height `200`', () =>
    <Image
      width={300}
      height={200}
      fit='cover'
      src='https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/web.png'
    />
  )
