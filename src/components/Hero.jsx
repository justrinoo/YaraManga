import React from "react";
import Thumbnail from "../assets/images/Thumbnail.png";
export default function Hero() {
	return (
		<>
			<section className="mt-16">
				<div className="container mx-auto px-4 md:flex items-center">
					<div className="md:w-2/4">
						<img
							src={Thumbnail}
							className="w-full px-16 image-thum bg-fixed hidden md:block"
							alt="Thumbnail"
						/>
					</div>
					<div className="md:w-2/4">
						<div className="mb-28">
							<h1 className="text-3xl uppercase font-bold">yara manga</h1>
							<p className="mt-5 text-justify">
								sebuah situs baca komik yang menyediakan komik-komik yang sedang
								popular, kamu dapat membaca dengan nyaman diwebsite ini tanpa
								ada gangguan iklan. Jika ada masalah hubungi saya di menu
								contact
							</p>
							<div className="relative text-gray-600 focus-within:text-gray-400">
								<input
									type="text"
									className="py-2 rounded-md pl-10 w-full bg-transparent border mt-5"
									placeholder="Toyko Revengers, Shingeki No Kyojin, Kimetsu No Yaiba"
								/>
								{/* {filterManga.length > 0
									? filterManga.map((item) => <List data={item} />)
									: null} */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
