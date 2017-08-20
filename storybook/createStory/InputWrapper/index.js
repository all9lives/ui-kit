import { Component, cloneElement } from 'react'

export class CheckboxWrapper extends Component {
  state = {
    value: false
  }
  handleValueChange = () => this.setState(({ value }) => ({ value: !value }))
  render () {
    const value = this.state.value
    const onValueChange = this.handleValueChange
    return cloneElement(this.props.children, { value, onValueChange })
  }
}

class InputWrapper extends Component {
  state = {
    value: ''
  }
  handleValueChange = (value) => this.setState({ value })
  render () {
    const value = this.state.value
    const onChangeText = this.handleValueChange
    return cloneElement(this.props.children, { value, onChangeText })
  }
}

export default InputWrapper
