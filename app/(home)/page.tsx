import "../styles/global.css";
import { Metadata } from "next";
import styles from "../styles/home.module.css";
import Movie from "../../components/movie";
import { API_URL } from "../constants";

export const metadata: Metadata = {
	title: "Home",
};

async function getMovies() {
	// await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(API_URL);
	const json = response.json();
	return json;
}

export default async function HomePage() {
	const movies = await getMovies();
	return (
		<div className={styles.container}>
			{movies.map((movie) => (
				<Movie id={movie.id} title={movie.title} poster_path={movie.poster_path} key={movie.id} />
			))}
		</div>
	);
}
