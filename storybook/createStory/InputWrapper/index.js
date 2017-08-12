import { Component, cloneElement } from 'react'

class InputWrapper extends Component {
  state = {
    value: ''
  }
  handleInputChange = (value) => this.setState({ value })
  render () {
    const value = this.state.value
    const onChangeText = this.handleInputChange
    return cloneElement(this.props.children, { value, onChangeText })
  }
}

export default InputWrapper
