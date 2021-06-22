import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DetailChapter(props) {
	const chaptSlug = props.match.params.chaptslug;
	console.log(props);
	// console.log(chaptSlug);
	const [detailChapt, setDetailChapt] = useState([]);
	const [chapter, setChapter] = useState([]);

	const getDetailChapt = async () => {
		try {
			const response = await axios.get(
				`https://mangamint.kaedenoki.net/api/chapter/${chaptSlug}`
			);
			setDetailChapt(response.data.chapter_image);
			setChapter(response.data);
			console.log(response.data);
		} catch (error) {
			throw new Error(error);
		}
	};

	useEffect(() => {
		getDetailChapt();
	}, [chaptSlug]);
	return (
		<>
			<div className="container mx-auto">
				<div className="text-center">
					<Link to="/">
						<h5 className="font-bold">Kembali Ke Home</h5>
					</Link>
					<h5 className="text-2xl">{chapter.chapter_name}</h5>
					<h5 className="text-2xl">Total Pages {chapter.chapter_pages}</h5>
					{detailChapt.map((chapt, idx) => (
						<div className="flex justify-center mt-10" key={idx}>
							<img src={chapt.chapter_image_link} alt={chapt.image_number} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
