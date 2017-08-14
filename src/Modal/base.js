import { PureComponent, cloneElement } from 'react'

const changeState = (state, value) => () => ({
  [state]: value
})

const TRANSITION_TIME = 300

export class StateProvider extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: props.isOpen,
      isOpening: false
    }
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.isOpen !== nextProps.isOpen) {
      let first = null
      let next = null
      if (nextProps.isOpen) {
        first = changeState('isOpen', nextProps.isOpen)
        next = changeState('isOpening', nextProps.isOpen)
      } else {
        first = changeState('isOpening', nextProps.isOpen)
        next = changeState('isOpen', nextProps.isOpen)
      }
      this.setState(first, () => {
        setTimeout(() => {
          this.setState(next)
        }, TRANSITION_TIME)
      })
    }
  }
  render () {
    const { children, onRequestClose } = this.props
    const { isOpen, isOpening } = this.state
    if (!isOpen) {
      return null
    }
    return cloneElement(children, { isOpen, isOpening, onRequestClose })
  }
}
