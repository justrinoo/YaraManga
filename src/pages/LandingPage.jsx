import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PopularKomik from "../components/PopularKomik";
import Recomended from "../components/Recomended";
import Footer from "../components/Footer";
export default function LandingPage() {
	return (
		<>
			<Header />
			<Hero />
			<PopularKomik />
			<Recomended />
			<Footer />
		</>
	);
}
