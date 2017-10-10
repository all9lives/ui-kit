import React from 'react'
import { FlatList, Text } from 'react-native'

const stuff = [...Array(100)].map((a, i) => ({ key: i, value: i }))

export default () => (
  <FlatList
    data={stuff}
    renderItem={({ item }) => <Text>{item.value}</Text>}
  />
)
