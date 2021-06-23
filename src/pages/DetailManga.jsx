import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DetailManga(props) {
	// console.log(props.match.params.slug);
	const mangaSlug = props.match.params.slug;
	const [detailTypeManga, setDetailTypeManga] = useState([]);
	const [chapter, setChapter] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const detailManga = async () => {
		try {
			setLoading(true);
			const manga = await axios.get(
				`https://mangamint.kaedenoki.net/api/manga/detail/${mangaSlug}`
			);
			// console.log(manga.data.chapter);
			setDetailTypeManga(manga.data);
			setChapter(manga.data.chapter);
			setLoading(false);
		} catch (error) {
			setLoading(true);
			throw new Error(error);
		}
	};

	useEffect(() => {
		detailManga();
	}, [mangaSlug]);

	return (
		<>
			<div className="px-12 py-12 h-auto md:h-screen">
				<Link to="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
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
				{isLoading ? (
					<p className="text-center">Loading...</p>
				) : (
					<div className="md:flex mt-10">
						<div className="md:w-1/5">
							<img
								src={detailTypeManga.thumb}
								className="w-52 rounded-md hidden md:block"
								alt=""
							/>
						</div>
						<div className="md:w-4/5">
							<div className="hidden md:block">
								<div className="flex ">
									<div className="bg-blue-400 w-16  rounded">
										<span className="ml-1">{detailTypeManga.type}</span>
									</div>
									<div className="bg-yellow-300 w-20  rounded mx-2">
										<span className="ml-1">{detailTypeManga.status}</span>
									</div>
								</div>
							</div>
							<h2 className="text-4xl font-bold mt-3 text-center md:text-justify">
								{detailTypeManga.title}
							</h2>
							<img
								src={detailTypeManga.thumb}
								className="w-52 rounded-md block md:hidden mt-2 mx-auto"
								alt=""
							/>
							<div className="block md:hidden">
								<div className="flex justify-center mt-3">
									<div className="bg-blue-400 w-16  rounded">
										<span className="ml-1">{detailTypeManga.type}</span>
									</div>
									<div className="bg-yellow-300 w-20  rounded mx-2 ">
										<span className="ml-1">{detailTypeManga.status}</span>
									</div>
								</div>
							</div>
							<p className="text-justify">
								<p className="mt-5">{detailTypeManga.synopsis}</p>
							</p>
							<h4 className="mt-8 text-2xl">{detailTypeManga.title}</h4>
							<div className="bg-gray-800 w-full mt-4 overflow-auto h-32 ">
								{chapter.map((item, idx) => (
									<Link to={`/chapter/${item.chapter_endpoint}`}>
										<div
											className="bg-blue-800 text-white py-2 px-2 mt-1"
											key={idx}
										>
											{item.chapter_title}
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
