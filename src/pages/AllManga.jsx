import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
export default function AllManga() {
	const [genres, setGenres] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [comics, setComics] = useState([]);
	const [page, setPage] = useState(0);

	const comicPage = 10;
	const pageVisited = page * comicPage;

	const comicDisplay = comics
		.slice(pageVisited, pageVisited + comicPage)
		.map((comic, comIdx) => (
			<div className="bg-gray-800 p-3 rounded-md mt-4" key={comIdx}>
				<p className="text-2xl font-bold truncate">{comic.title}</p>
				<Link to={`/manga/detail/${comic.endpoint}`}>
					<span className="mt-3">{comic.chapter}</span>
					<div className="bg-green-500 w-20 rounded mt-2 p-1 text-center">
						{comic.type}
					</div>
				</Link>
				<span className="text-gray-400 mt-5">Update: {comic.updated_on}</span>
			</div>
		));

	const pageCount = Math.ceil(comics.length / comicPage);

	const changePaginate = ({ selected }) => {
		setPage(selected++);
	};

	const ListGenres = async () => {
		try {
			const genre = await axios.get(
				"https://mangamint.kaedenoki.net/api/genres"
			);
			// console.log(genre.data.list_genre);
			setGenres(genre.data.list_genre);
		} catch (error) {
			throw new Error(error);
		}
	};
	const ListComics = async () => {
		try {
			const comics = await axios.get(
				`https://mangamint.kaedenoki.net/api/manga/page/${page}`
			);
			setComics(comics.data.manga_list);
			console.log(comics.data);
		} catch (error) {
			throw new Error(error);
		}
	};

	useEffect(() => {
		ListGenres();
		ListComics();
	}, [page]);

	return (
		<>
			<div className="container mx-auto  h-auto md:h-auto">
				<div className="flex">
					<div className="mt-12 md:w-1/4 hidden md:block">
						<h3 className="text-xl font-bold">List Genre</h3>
						<div className="overflow-auto h-72 mt-4">
							{genres.map((genre, genIdx) => (
								<div
									className="bg-gray-800 w-full mt-2 p-2 rounded"
									key={genIdx}
								>
									<Link to={`/genres/${genre.endpoint}/${genIdx + 1}`}>
										<p className="font-bold">{genre.genre_name}</p>
									</Link>
								</div>
							))}
						</div>
					</div>
					<div className="mt-12 w-full mx-3 md:w-4/5">
						<div className="flex">
							<Link to="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mt-2 mx-2"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>
							<h3 className="text-2xl font-bold">List Comic</h3>
						</div>
						{comicDisplay}
						<ReactPaginate
							previousLabel="Previous"
							nextLabel="Next"
							pageCount={pageCount}
							onPageChange={changePaginate}
							containerClassName="flex justify-center"
							previousClassName="font-bold text-lg mx-5"
							nextClassName="font-bold text-lg mx-5"
							pageClassName="font-bold text-lg mx-2"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
