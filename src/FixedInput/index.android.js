import React, { Component } from 'react'
import { Modal, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import base from './base'
import defaultProps from './defaultProps'
import Unit from '../utils/Unit'
import Color from '../utils/Color'
import Size from '../utils/Size'
import View from '../View'
import Text from '../Text'
import Button from '../Button'
import Input from '../Input'

const Container = styled(View)`
  ${base}
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`

const Header = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: ${Color.gray};
  padding: ${Unit.convert(Size.spacing * 2)} ${Unit.convert(Size.spacing)};
`

const Save = styled(View)`
  position: absolute;
  top: ${Unit.convert(Size.spacing)};
  right: ${Unit.convert(Size.spacing)};
`

const Body = styled(View)`
  padding: ${Unit.convert(Size.spacing)} ${Unit.convert(Size.spacing)} ${Unit.convert(Size.spacing * 2)};
`

export default class FixedInput extends Component {
  static defaultProps = defaultProps
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }
  componentDidMount () {
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
  }
  componentDidUpdate (prevProps) {
    if (this.props.show !== prevProps.show) {
      this.setState({ value: this.props.show ? this.props.value : '' })
    }
  }
  componentWillUnmount () {
    this.keyboardDidHideListener.remove()
  }
  _keyboardDidHide = () => {
    this.props.onRequestDismiss()
  }
  handlePress = () => {
    if (this.props.onChangeText) {
      this.props.onChangeText(this.state.value)
    }
  }
  handleChangeText = (value) => {
    this.setState({ value })
  }
  render () {
    const { show, label, saveText, onRequestDismiss, value, ...props } = this.props
    if (!show) {
      return null
    }
    return (
      <Modal visible transparent onRequestClose={onRequestDismiss}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
          <TouchableWithoutFeedback onPress={onRequestDismiss}>
            <View grow={1} />
          </TouchableWithoutFeedback>
          <Container>
            <Header align='center' direction='row'>
              <Text>{label}</Text>
              <Save>
                <Button title={saveText} color='gray' onPress={this.handlePress} />
              </Save>
            </Header>
            <Body>
              <Input {...props} value={this.state.value || value} autoFocus onChangeText={this.handleChangeText} />
            </Body>
          </Container>
        </KeyboardAvoidingView>
      </Modal>
    )
  }
}
