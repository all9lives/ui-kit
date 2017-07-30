import React from 'react'
import createStory from '../../storybook/createStory'
import View from '../../src/View'
import Text from '../../src/Text'

const squareStyle = { width: 200, height: 200, backgroundColor: 'white' }

createStory('View.align', module)
  .add('with align `top left`', () => (
    <View align='top left' style={squareStyle}>
      <Text>Top Left</Text>
    </View>
  ))
  .add('with align `top center`', () => (
    <View align='top center' style={squareStyle}>
      <Text>Top Center</Text>
    </View>
  ))
  .add('with align `top right`', () => (
    <View align='top right' style={squareStyle}>
      <Text>Top Right</Text>
    </View>
  ))
  .add('with align `middle left`', () => (
    <View align='middle left' style={squareStyle}>
      <Text>Middle Left</Text>
    </View>
  ))
  .add('with align `middle center`', () => (
    <View align='middle center' style={squareStyle}>
      <Text>Middle Center</Text>
    </View>
  ))
  .add('with align `middle right`', () => (
    <View align='middle right' style={squareStyle}>
      <Text>Middle Right</Text>
    </View>
  ))
  .add('with align `bottom left`', () => (
    <View align='bottom left' style={squareStyle}>
      <Text>Bottom Left</Text>
    </View>
  ))
  .add('with align `bottom center`', () => (
    <View align='bottom center' style={squareStyle}>
      <Text>Bottom Center</Text>
    </View>
  ))
  .add('with align `bottom right`', () => (
    <View align='bottom right' style={squareStyle}>
      <Text>Bottom Right</Text>
    </View>
  ))
