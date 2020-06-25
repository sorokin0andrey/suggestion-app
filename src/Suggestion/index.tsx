import React, { memo, useState, useEffect, useCallback } from 'react'
import { View, TextInput, Image, FlatList, Text, ActivityIndicator } from 'react-native'
import { Touchable } from '@busfor/react-native-touchable'
import { useDispatch } from 'react-redux'

import { useTimeout } from '../hooks'
import { setSelectedItem } from '../redux/actions'

import styles from './styles'

const clearIcon = require('./clear.png')

interface ListItem {
  name: string
}

export default memo(() => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<ListItem[]>([])

  const [setDebounceTimeout] = useTimeout()

  const dispatch = useDispatch()

  const fetchData = useCallback(() => {
    if (query.length === 0) {
      if (loading) {
        setLoading(false)
      }
      setItems([])
      return
    }
    if (!loading) {
      setLoading(true)
    }
    setDebounceTimeout(() => {
      fetch(`https://api.savetime.net/v1/client/suggest/item?q=${query}&brandId=24&shopId=1187`)
        .then((res) => res.json())
        .then((data) => {
          setItems(data.items)
          setLoading(false)
        })
    }, 1000)
  }, [query, loading])

  const onPressClearButton = useCallback(() => setQuery(''), [])

  const onPressItem = useCallback(
    (name: string) => {
      dispatch(setSelectedItem(name))
      setQuery('')
    },
    [dispatch]
  )

  useEffect(() => {
    fetchData()
  }, [query])

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={query}
          placeholder='Введите название продукта'
          onChangeText={setQuery}
        />
        <Touchable borderless onPress={onPressClearButton} style={styles.clearButton}>
          <Image source={clearIcon} />
        </Touchable>
      </View>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size='large' />
        </View>
      )}
      {!loading && (
        <FlatList
          keyboardShouldPersistTaps='always'
          data={items}
          renderItem={({ item }) => (
            <Touchable onPress={() => onPressItem(item.name)} style={styles.listItem}>
              <Text>{item.name}</Text>
            </Touchable>
          )}
        />
      )}
    </View>
  )
})
