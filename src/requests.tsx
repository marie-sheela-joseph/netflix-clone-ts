const baseUrl = 'https://api.themoviedb.org/3';

export const requests = {
    fetchTrending: `${baseUrl}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-UK`,
    fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
    fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
    fetchActionMovies: `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
    fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`
}