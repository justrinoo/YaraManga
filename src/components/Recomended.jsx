import React from "react";
import RecomendedImage from "../assets/images/RecomImg.png";

export default function Recomended() {
	return (
		<>
			<section className="container mx-auto px-16 mt-28">
				<h2 className="text-2xl font-bold">Rekomended Manga</h2>
				<div className="border-2 border-gray-600 py-8 px-8 mt-5 rounded-md">
					<div className="flex flex-wrap flex-3 items-center justify-center">
						<div className="parent-img">
							<img src={RecomendedImage} className="h-40 mx-3 mt-2" alt="" />
							<span className="font-bold text-xl mx-3">Yin Zhi Shoumuren</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
