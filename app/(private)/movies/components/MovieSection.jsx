import { getMovies } from "@/helpers/movieFunctions";
import React from "react";
import MovieCard from "./MovieCard";

const MovieSection = async ({ title, type }) => {
	const movies = await getMovies(type);
	return (
		<div className="mb-4 ">
			<p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
				{title}
			</p>
			<div className="grid grid-flow-col gap-2 overflow-x-scroll">
				{movies.map((movie) => (
					<MovieCard key={movie?.id} {...movie} />
				))}
			</div>
		</div>
	);
};

export default MovieSection;
