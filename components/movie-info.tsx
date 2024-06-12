import { API_URL } from "../app/constants";
import styles from "../app/styles/movie-info.module.css";

export async function getMovie(id: string) {
	// await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(`${API_URL}/${id}`);
	return response.json();
}

export default async function MovieInfo({ id }) {
	const movieInfo = await getMovie(id);
	return (
		<div className={styles.container}>
			<img src={movieInfo.poster_path} alt={movieInfo.title} className={styles.poster} />
			<div className={styles.info}>
				<h1 className={styles.title}>{movieInfo.title}</h1>
				<h3>⭐️ {movieInfo.vote_average.toFixed(1)}</h3>
				<p>{movieInfo.overview}</p>
				<a href={movieInfo.homepage} target={"_blank"}>
					Home &rarr;
				</a>
			</div>
		</div>
	);
}
