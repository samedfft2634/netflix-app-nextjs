const API_KEY = process.env.TMDB_KEY 

export const getMovies = async (type) => {
	const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;
	const res = await fetch(URL);
	if (!res.ok) {
		//* This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	const { results } = await res.json();
	return results;
};

export const getVideoKey = async (movieId) => {
	const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
	const res = await fetch(videoUrl);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const data = await res.json();
	return data.results[0].key;
};

export const getMovieDetail = async (movieId) => {
    const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  
    const res = await fetch(movieDetailBaseUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  };