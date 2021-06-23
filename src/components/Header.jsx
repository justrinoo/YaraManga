import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header>
				<nav className="container mx-auto px-4 flex justify-between items-center">
					<div className="mt-5">
						<Link to="/listmanga" className="font-bold uppercase text-2xl">
							YM
						</Link>
					</div>
					<div className="mt-5">
						<Link to="/listmanga" className="font-semibold">
							Semua Komik
						</Link>
					</div>
					<div className="mt-5">
						<Link to="/listmanga" className="font-bold mr-4">
							About YM
						</Link>
						<Link to="/listmanga" className="font-bold">
							Contact
						</Link>
					</div>
				</nav>
			</header>
		</>
	);
}
