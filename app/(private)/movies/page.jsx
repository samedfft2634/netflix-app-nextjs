import { getMovies } from "@/helpers/movieFunctions";

const Movies = async () => {
	const movies = await getMovies("now_playing");
	return <div>Movies</div>;
};

export default Movies;
