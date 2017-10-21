import React from 'react'
import { Base } from './base'
import defaultProps from './defaultProps'

const GhostButton = ({ onClick, onPress, ...props }) => (
  <span onClick={onClick || onPress}>
    <Base {...props} />
  </span>
)

GhostButton.defaultProps = defaultProps

export default GhostButton
