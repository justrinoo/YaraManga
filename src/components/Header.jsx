import React from "react";

export default function Header() {
	return (
		<>
			<header>
				<nav className="container mx-auto px-4 flex justify-between items-center">
					<div className="mt-5">
						<a href="#" className="font-bold uppercase text-2xl">
							YM
						</a>
					</div>
					<div className="mt-5">
						<a href="" className="font-semibold">
							Semua Komik
						</a>
					</div>
					<div className="mt-5">
						<a href="" className="font-bold mr-4">
							About YM
						</a>
						<a href="" className="font-bold">
							Contact
						</a>
					</div>
				</nav>
			</header>
		</>
	);
}
