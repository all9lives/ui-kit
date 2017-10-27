import React, { Component } from 'react'
import defaultProps from './defaultProps'

class FadeInView extends Component {
  static defaultProps = defaultProps
  state = {
    animated: false
  }
  componentDidMount () {
    const { delay } = this.props
    this.timeout = setTimeout(() => {
      this.setState({ animated: true })
    }, delay)
  }
  componentWillUnmount () {
    clearTimeout(this.timeout)
  }
  render () {
    const { children, duration } = this.props
    return (
      <div style={{ opacity: this.state.animated ? 1 : 0, transition: `opacity ${duration}ms linear` }}>
        {children}
      </div>
    )
  }
}

export default FadeInView
