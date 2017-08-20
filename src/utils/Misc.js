import React from 'react'
import { mapProps } from 'recompose'

export const filterProps = (Component, filteredProps) => (props) => {
  const newProps = Object.assign({}, props)
  filteredProps.forEach(propName => {
    delete newProps[propName]
  })
  return <Component {...newProps} />
}

export { mapProps }
