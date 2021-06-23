import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Recomended() {
	const [mangaRecom, setMangaRecom] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const getRecomendedManga = async () => {
		try {
			const response = await axios.get(
				"https://mangamint.kaedenoki.net/api/recommended"
			);
			setMangaRecom(response.data.manga_list);
			console.log(response.data.manga_list);
		} catch (error) {
			throw new Error(error);
		}
	};

	useEffect(() => {
		getRecomendedManga();
	}, []);

	const comics = mangaRecom.splice(0, 6);
	return (
		<>
			<section className="container mx-auto px-16 mt-28">
				<h2 className="text-2xl font-bold">Rekomended Manga</h2>
				<div className="border-2 border-gray-600 py-8 px-8 mt-5 rounded-md">
					<div className="flex flex-wrap flex-3 items-center justify-center">
						{comics.map((comic, comicIdx) => (
							<div className="parent-img" key={comicIdx}>
								<Link to={`/manga/detail/${comic.endpoint}`}>
									<img
										src={comic.thumb}
										className="h-40 mx-3 mt-2 rounded"
										alt={`Comic ${comic.title}`}
									/>
								</Link>
								<p className="text-recomended font-bold text-xl mx-3">
									{comic.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
