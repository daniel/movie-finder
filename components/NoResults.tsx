import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextStyles } from '../constants/Typography'

type Props = {
  query: string
}

export const NoResults = ({ query }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={TextStyles.body}>
        {`Vi hittade ingenting relaterat till "${query}".`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
