import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PopularKomik() {
	const [popularManga, setPopularManga] = useState([]);
	const [limit] = useState(1);
	const [isLoading, setLoading] = useState(false);
	const getPopularManga = async () => {
		try {
			setLoading(true);
			const response = await axios.get(
				`https://mangamint.kaedenoki.net/api/manga/popular/${limit}`
			);
			setLoading(false);
			setPopularManga(response.data.manga_list);
			// console.log(popularManga.splice(0, 8).map((items) => items));
			// console.log(response.data.manga_list);
		} catch (err) {
			setLoading(true);
			throw new Error(err);
		}
	};

	useEffect(() => {
		getPopularManga();
	}, [limit]);

	return (
		<>
			<div className="container mx-auto px-16 mt-36">
				<h2 className="text-2xl font-bold">Popular Komik</h2>
				<div className="md:flex flex-row flex-wrap justify-around">
					{popularManga.length > 0
						? popularManga.map((comic, comIdx) => (
								<div className="mt-5 mx-2" key={comIdx}>
									<Link
										to={`/${comic.type.toLowerCase()}/detail/${comic.endpoint}`}
									>
										<img
											src={comic.thumb}
											className="w-full"
											alt={comic.title}
										/>
									</Link>
									<div className="flex justify-between">
										<p className="text-title-popular text-lg">{comic.title}</p>
										<span className="bg-blue-600 w-50 rounded-sm">
											Type {comic.type}
										</span>
									</div>
								</div>
						  ))
						: isLoading && <p>Loading...</p>}
				</div>
			</div>
		</>
	);
}
