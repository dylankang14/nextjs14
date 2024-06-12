import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const metadata = {
	title: "Movie detail",
};

export default function MovieDetail({ params: { id } }: { params: { id: string } }) {
	return (
		<div>
			<h1>Movie details here.</h1>
			<Suspense fallback={<h1>Movie info loading...</h1>}>
				<MovieInfo id={id} />
			</Suspense>
			<Suspense fallback={<h1>Movie videos loading...</h1>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	);
}
