import React from "react";
import Thumbnail from "../assets/images/Thumbnail.png";
export default function Hero() {
	return (
		<>
			<section className="mt-16">
				<div className="container mx-auto px-4 flex items-center">
					<div className="w-2/4">
						<img
							src={Thumbnail}
							className="w-full px-16 image-thumb"
							alt="Thumbnail"
						/>
					</div>
					<div className="w-2/4">
						<div className="mb-28">
							<h1 className="text-3xl uppercase font-bold">yara manga</h1>
							<p className="mt-5 text-justify">
								sebuah situs baca komik yang menyediakan  komik-komik yang
								sedang popular, kamu dapat membaca dengan nyaman diwebsite ini
								tanpa ada gangguan iklan. Jika ada masalah hubungi saya di menu
								contact
							</p>
							<div class="relative text-gray-600 focus-within:text-gray-400">
								<span class="absolute inset-y-0 left-0 flex items-center pl-2">
									<button type="submit" class="p-1 mt-5">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											viewBox="0 0 24 24"
											class="w-6 h-6"
										>
											<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
										</svg>
									</button>
								</span>
								<input
									type="text"
									className="py-2 rounded-md pl-10 w-full bg-transparent border mt-5"
									placeholder="Attack On Titan, Naruto, Tokyo Revengers"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
