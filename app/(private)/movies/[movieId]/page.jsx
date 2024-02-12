import { getMovieDetail, getVideoKey } from "@/helpers/movieFunctions";
import VideoSection from "../components/VideoSection";
import { BackspaceIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// import { useParams } from "next/navigation";

const MovieDetail = async ({ params: { movieId } }) => {
	//   const { movieId } = useParams() //? This for client .
	let movieDetails = await getMovieDetail(movieId);
	let videoKey = await getVideoKey(movieId);
	const { title } = movieDetails;
    
	//   console.log(movieId);
	//   console.log(movieDetails);

	return (
		<div className="md:container px-10 mx-auto py-5">
			<h1 className="text-center text-white text-3xl">{title}</h1>
			{videoKey && <VideoSection videoKey={videoKey} />}
			<div className="flex items-center mt-3 md:mt-4 gap-3">
				<Link
					href={"/movies"}
					className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition mt-2"
				>
					<BackspaceIcon className="w-4 md:w-7 text-black mr-1" />
					Go Back
				</Link>
			</div>
		</div>
	);
};

export default MovieDetail;
