import React from 'react'
import PropTypes from 'prop-types'
import style from './style'

export default function CenterView (props) {
  return (
    <div style={style.main}>
      {props.children}
    </div>
  )
}

CenterView.defaultProps = {
  children: null
}

CenterView.propTypes = {
  children: PropTypes.node
}
