import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import Suggestion from '../Suggestion'
import { RootState } from '../redux/reducers'

import styles from './styles'

export default memo(() => {
  const selectedItem = useSelector((state: RootState) => state.app.selectedItem)

  return (
    <View style={styles.container}>
      <View style={styles.selectedItemContainer}>
        <Text style={styles.selectedItemText}>Selected item: {selectedItem || 'none'}</Text>
      </View>
      <Suggestion />
    </View>
  )
})
