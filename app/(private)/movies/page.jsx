import { getMovies } from "@/helpers/movieFunctions";


const Movies = async() => {
	const movies = await getMovies("popular")
	return <div>Movies</div>;
};

export default Movies;
