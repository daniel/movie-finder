import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Spacing } from '../constants/Spacing'
import { TextStyles } from '../constants/Typography'

type Props = {
  header: string
  hidden: boolean
}

export const ResultsHeader = ({ header, hidden }: Props) => {
  if (hidden) return null
  return (
    <View style={styles.container}>
      <Text style={TextStyles.h2}>{header}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: Spacing.small,
    marginBottom: Spacing.medium,
  },
})
