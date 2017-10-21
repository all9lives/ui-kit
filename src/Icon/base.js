import React, { Component } from 'react'
import Image from '../Image'
import Size from '../utils/Size'

const SIZE_MAPPING = {
  small: 0.5,
  regular: 1,
  large: 2
}

export class Base extends Component {
  render () {
    return (
      <Image
        {...this.props}
        size={SIZE_MAPPING[this.props.size] * Size.icon}
      />
    )
  }
}
