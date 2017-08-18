import React from 'react'
import createStory from '../../storybook/createStory'
import Image from '../../src/Image'

const sourceUrl = 'https://raw.githubusercontent.com/Fineighbor/ui-kit/master/screenshots/web.png'

createStory('Image', module)
  .add('with fit `contain`', () =>
    <Image
      fit='contain'
      src={sourceUrl}
    />
  )
  .add('with fit `cover`', () =>
    <Image
      fit='cover'
      src={sourceUrl}
    />
  )
  .add('with size `200`', () =>
    <Image
      size={200}
      src={sourceUrl}
    />
  )
  .add('with width `300`, height `200`', () =>
    <Image
      width={300}
      height={200}
      fit='cover'
      src={sourceUrl}
    />
  )
  .add('with `source`', () =>
    <Image
      source={sourceUrl}
    />
  )
