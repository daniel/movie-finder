import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Color } from '../constants/Colors'
import { Spacing } from '../constants/Spacing'

type Props = {
  text: string
  placeholder: string
  onChangeText: (text: string) => void
}

const SearchInput = ({ text, placeholder, onChangeText }: Props) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="search"
        size={18.5}
        color={Color.black}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={Color.mediumGrey}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: Spacing.small,
  },
  icon: {
    paddingLeft: Spacing.small,
    paddingRight: Spacing.small,
  },
  input: {
    color: Color.black,
    flex: 1,
    paddingVertical: Spacing.small,
  },
})

export default SearchInput
