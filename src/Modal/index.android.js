import styled from 'styled-components/native'
import defaultProps from './defaultProps'

const Modal = styled.Modal.attrs({
  visible: props => props.isOpen
})`
`
Modal.defaultProps = defaultProps

export default Modal
