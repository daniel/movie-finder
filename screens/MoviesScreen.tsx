import React, { useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MovieCard } from '../components/MovieCard'
import { NoResults } from '../components/NoResults'
import { ResultsHeader } from '../components/ResultsHeader'
import SearchInput from '../components/SearchInput'
import { Color } from '../constants/Colors'
import { Spacing } from '../constants/Spacing'
import { useMovieSearch } from '../hooks/useMovieSearch'
import { RootTabScreenProps } from '../types'

export function MoviesScreen({ navigation }: RootTabScreenProps<'Movies'>) {
  const [query, setQuery] = useState('')
  const { results, loading } = useMovieSearch(query, 1)

  const onChangeText = (text: string) => {
    setQuery(text)
  }

  const renderItem = ({ item }: any) => <MovieCard movie={item} />

  const renderLoading = () => (
    <View style={styles.loading}>
      <ActivityIndicator color={Color.white} size={'large'} />
    </View>
  )

  const renderResults = () => {
    return (
      <>
        <FlatList
          data={results}
          renderItem={renderItem}
          numColumns={3}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<NoResults query={query} />}
          ListHeaderComponent={
            <ResultsHeader header="Populära filmer" hidden={query !== ''} />
          }
        />
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        text={query}
        onChangeText={onChangeText}
        placeholder="Search movies"
      />
      {loading ? renderLoading() : renderResults()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    marginTop: Spacing.medium,
  },
})
