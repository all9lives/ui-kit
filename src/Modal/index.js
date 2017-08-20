import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { StateProvider } from './base'
import defaultProps from './defaultProps'
import View from '../View'

export const StyledModal = styled(View)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${props => props.isOpening ? 1 : 0};
  transition: opacity 300ms ease-in;
`
StyledModal.defaultProps = defaultProps

export default class Modal extends PureComponent {
  render () {
    const { children } = this.props
    return (
      <StateProvider {...this.props}>
        <StyledModal>
          {children}
        </StyledModal>
      </StateProvider>
    )
  }
}
