import React from 'react'
import createStory from '../../storybook/createStory'
import View from '../../src/View'
import Text from '../../src/Text'
import './align'

createStory('View', module)
  .add('with direction `column`', () => (
    <View direction='column'>
      <Text>Row 1</Text>
      <Text>Row 2</Text>
    </View>
  ))
  .add('with direction `row`', () => (
    <View direction='row'>
      <Text>Column 1</Text>
      <Text>Column 2</Text>
    </View>
  ))
  .add('with margin `10`', () => (
    <View>
      <View margin={10}>
        <Text>Margin 10x</Text>
      </View>
      <View margin={10}>
        <Text>Margin 10x</Text>
      </View>
    </View>
  ))
  .add('with margin `1 2`', () => (
    <View>
      <View margin='1 2'>
        <Text>Margin 1x/2x</Text>
      </View>
      <View margin='1 2'>
        <Text>Margin 1x/2x</Text>
      </View>
    </View>
  ))
  .add('with padding `2`', () => (
    <View>
      <View padding={2}>
        <Text>Padding 2x</Text>
      </View>
      <View padding={2}>
        <Text>Padding 2x</Text>
      </View>
    </View>
  ))
  .add('with width `120`', () => (
    <View width={120}>
      <Text>Width 120</Text>
    </View>
  ))
  .add('with height `120`', () => (
    <View height={120}>
      <Text>Height 120</Text>
    </View>
  ))
  .add('with grow `1:2`', () => (
    <View direction='row'>
      <View grow={1}><Text>Grow 1</Text></View>
      <View grow={2}><Text>Grow 2</Text></View>
    </View>
  ))
