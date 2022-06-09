import { useEffect, useState } from 'react'
import { Movie, TheMovieDb } from '../services/TheMovieDb'

export function useMovieSearch(query: string, page: number) {
  const [results, setResults] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMovies()
  }, [query])

  const getMovies = async () => {
    setLoading(true)
    let results = []
    if (query) {
      results = await TheMovieDb.searchMovies(query, page)
    } else {
      results = await TheMovieDb.getPopularMovies(page)
    }
    if (!results) return
    setResults(results)
    setLoading(false)
  }

  return {
    results,
    loading,
  }
}
