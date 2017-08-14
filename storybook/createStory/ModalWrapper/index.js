import React, { Component, cloneElement } from 'react'
import View from '../../../src/View'
import Button from '../../../src/Button'

class ModalWrapper extends Component {
  state = {
    isOpen: false
  }
  handleOpen = () => {
    this.setState({ isOpen: true })
  }
  handleClose = () => {
    this.setState({ isOpen: false })
  }
  render () {
    const { isOpen } = this.state
    const { children } = this.props
    return (
      <View direction='column'>
        {cloneElement(children, { isOpen, onRequestClose: this.handleClose })}
        <Button onPress={this.handleOpen}>Open</Button>
      </View>
    )
  }
}

export default ModalWrapper
