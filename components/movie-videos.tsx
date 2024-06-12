import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	throw new Error("error...");
	// const response = await fetch(`${API_URL}/${id}/videos`);
	// return response.json();
}

export default async function MovieVideos({ id }) {
	const movieVideos = await getVideos(id);
	return <h6>{JSON.stringify(movieVideos)}</h6>;
}
