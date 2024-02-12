import { getMovies } from "@/helpers/movieFunctions";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";


export const metadata = {
	title: "Movies",
	description: "Movies Page.",
};
const titles = [
	{
		title: "NOW PLAYING",
		type: "now_playing",
	},

	{
		title: "POPULAR",
		type: "popular",
	},
	{
		title: "TOP RATED",
		type: "top_rated",
	},
	{
		title: "UPCOMING",
		type: "upcoming",
	},
];
const Movies = async () => {
    const movies = await getMovies("now_playing");
   
	return (
		<>
			<HeroSection
				movieId={movies[0]?.id}
				title={movies[0]?.title}
				overview={movies[0]?.overview}
			/>
			{titles.map((item,i) => (
				<div className="px-4 md:px-12 mt-4" key={i}>
					<MovieSection title={item.title} type={item.type} />
				</div>
			))}
		</>
	);
};

export default Movies;
