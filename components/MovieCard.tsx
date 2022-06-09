import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Layout from '../constants/Layout'
import { Spacing } from '../constants/Spacing'
import { Movie, TheMovieDb } from '../services/TheMovieDb'

type Props = {
  movie: Movie
}

const WINDOW_WIDTH = Layout.window.width
const CARD_SPACING = Spacing.small
const NUM_COLUMNS = 2

const POSTER_SOURCE_WIDTH = 200
const IMAGE_WIDTH =
  (WINDOW_WIDTH - CARD_SPACING * (NUM_COLUMNS + 1)) / NUM_COLUMNS
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.5

export const MovieCard = ({ movie }: Props) => {
  const uri = TheMovieDb.getPosterUri(movie, POSTER_SOURCE_WIDTH)
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri,
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: Spacing.small,
    paddingBottom: Spacing.small,
  },
  image: {
    borderRadius: 4,
  },
})
