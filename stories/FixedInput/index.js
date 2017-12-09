import React, { Component, cloneElement } from 'react'
import { action } from '@storybook/addon-actions'
import createStory from '../../storybook/createStory'
import FixedInput from '../../src/FixedInput'
import View from '../../src/View'
import Button from '../../src/Button'

class StateProvider extends Component {
  state = {
    show: false
  }
  render () {
    return (
      <View style={{ width: '100%', height: '100%', paddingTop: 30 }} align='center'>
        <Button onPress={() => this.setState({ show: true })} title='Edit' />
        {cloneElement(
          this.props.children,
          {
            onRequestDismiss: () => {
              if (this.props.onRequestDismiss) this.props.onRequestDismiss()
              this.setState({ show: false })
            },
            show: this.state.show
          }
        )}
      </View>
    )
  }
}

createStory('FixedInput', module)
  .add('default', () => (
    <StateProvider>
      <FixedInput />
    </StateProvider>
  ))
  .add('with multiline', () => (
    <StateProvider>
      <FixedInput multiline />
    </StateProvider>
  ))
  .add('with label', () => (
    <StateProvider>
      <FixedInput label='MyLabel' />
    </StateProvider>
  ))
  .add('with saveText', () => (
    <StateProvider>
      <FixedInput saveText='MySaveText' />
    </StateProvider>
  ))
  .add('with onRequestDismiss', () => (
    <StateProvider onRequestDismiss={action('onRequestDismiss')}>
      <FixedInput />
    </StateProvider>
  ))
  .add('with onChangeText', () => (
    <StateProvider>
      <FixedInput onChangeText={action('Input onChangeText')} />
    </StateProvider>
  ))
