import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface MovieProps {
	params: { id: string };
}

export async function generateMetadata({ params: { id } }: MovieProps) {
	const movie = await getMovie(id);
	return {
		title: movie.title,
	};
}

export default function MovieDetail({ params: { id } }: MovieProps) {
	return (
		<div>
			<Suspense fallback={<h1>Movie info loading...</h1>}>
				<MovieInfo id={id} />
			</Suspense>
			<Suspense fallback={<h1>Movie videos loading...</h1>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	);
}
