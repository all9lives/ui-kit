import React, { PureComponent } from 'react'
import { css } from 'styled-components'
import defaultProps from './defaultProps'
import Color from '../utils/Color'

const base = css`
  position: relative;
  width: 100%;
`

export const labelBase = css`
  color: ${props => props.isFocus
    ? (props.labelFocusColor || Color.primary)
    : (props.labelColor || Color.black)};
`

export const inputBase = css`
  position: relative;
`

export const getComponent = ({ Container, Label, Input }) => class Component extends PureComponent {
  static defaultProps = defaultProps;
  state = {
    isFocus: false
  }
  handleFocus = (e) => {
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
    this.setState({ isFocus: true })
  }
  handleBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
    this.setState({ isFocus: false })
  }
  render () {
    const { isFocus } = this.state
    const { value, placeholder, labelColor, labelFocusColor } = this.props
    return (
      <Container>
        <Label
          size='small'
          show={!!value}
          isFocus={isFocus}
          labelColor={labelColor}
          labelFocusColor={labelFocusColor}
        >
          {placeholder}
        </Label>
        <Input
          {...this.props}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </Container>
    )
  }
}

export default base
