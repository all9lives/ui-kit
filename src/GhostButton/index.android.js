import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Base } from './base'
import defaultProps from './defaultProps'

const GhostButton = ({ onPress, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <Base {...props} />
  </TouchableOpacity>
)
GhostButton.defaultProps = defaultProps

export default GhostButton
