const API_KEY = '27cfec6c9eb8080cb7d8025ba420e2d7'
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'sv-SE'

export type Movie = {
  id: number
  title: string
  poster_path: string
  overview: string
  release_date: string
  vote_average: number
  popularity: number
}

export type MovieResponse = {
  page: number
  total_results: number
  total_pages: number
  results: Movie[]
}

export type GenreResponse = {
  id: number
  name: string
}

export class TheMovieDb {
  static async searchMovies(query: string, page: number): Promise<Movie[]> {
    return fetch(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`
    )
      .then(response => response.json())
      .then((response: MovieResponse) => response.results)
  }

  static async getPopularMovies(page: number): Promise<Movie[]> {
    return fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`
    )
      .then(response => response.json())
      .then((response: MovieResponse) => response.results)
  }

  static getPosterUri(movie: Movie, width: number): string {
    return `https://image.tmdb.org/t/p/w${width}` + movie.poster_path
  }

  static async getMovieGenres(): Promise<GenreResponse[]> {
    return fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`
    ).then(response => response.json())
  }
}
