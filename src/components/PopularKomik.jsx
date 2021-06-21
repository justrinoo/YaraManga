import React from "react";
import JujutsuKaisen from "../assets/images/jujutsu-kaisen.png";
export default function PopularKomik() {
	return (
		<>
			<div className="container mx-auto px-16 mt-36">
				<h2 className="text-2xl font-bold">Popular Komik</h2>
				<div className="md:flex flex-row flex-wrap">
					<div className="mt-5 mx-2 ">
						<img
							src={JujutsuKaisen}
							className="cursor-pointer h-96"
							alt="Jujutsu Kaisen"
						/>
						<h5 className="text-lg">Jujutsu Kaisen</h5>
					</div>
					<div className="mt-5 mx-2 ">
						<img
							src={JujutsuKaisen}
							className="cursor-pointer h-96"
							alt="Jujutsu Kaisen"
						/>
						<h5 className="text-lg">Jujutsu Kaisen</h5>
					</div>
					<div className="mt-5 mx-2 ">
						<img
							src={JujutsuKaisen}
							className="cursor-pointer h-96"
							alt="Jujutsu Kaisen"
						/>
						<h5 className="text-lg">Jujutsu Kaisen</h5>
					</div>
					<div className="mt-5 mx-2 ">
						<img
							src={JujutsuKaisen}
							className="cursor-pointer h-96"
							alt="Jujutsu Kaisen"
						/>
						<h5 className="text-lg">Jujutsu Kaisen</h5>
					</div>
					<div className="mt-5 mx-2 ">
						<img
							src={JujutsuKaisen}
							className="cursor-pointer h-96"
							alt="Jujutsu Kaisen"
						/>
						<h5 className="text-lg">Jujutsu Kaisen</h5>
					</div>
					<div className="mt-5 mx-2 ">
						<img
							src={JujutsuKaisen}
							className="cursor-pointer h-96"
							alt="Jujutsu Kaisen"
						/>
						<h5 className="text-lg">Jujutsu Kaisen</h5>
					</div>
					<div className="mt-5 mx-2 ">
						<img
							src={JujutsuKaisen}
							className="cursor-pointer h-96"
							alt="Jujutsu Kaisen"
						/>
						<h5 className="text-lg">Jujutsu Kaisen</h5>
					</div>
					<div className="mt-5 mx-2 ">
						<img
							src={JujutsuKaisen}
							className="cursor-pointer h-96"
							alt="Jujutsu Kaisen"
						/>
						<h5 className="text-lg">Jujutsu Kaisen</h5>
					</div>
				</div>
			</div>
		</>
	);
}
