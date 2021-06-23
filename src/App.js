import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailManga from "./pages/DetailManga";
import DetailChapter from "./pages/DetailChapter";
import AllManga from "./pages/AllManga";
function App() {
	window.document.title = "Yara Manga";
	return (
		<div className="App">
			<Router>
				<Route exact path="/" render={(props) => <LandingPage {...props} />} />
				<Route
					path="/manga/detail/:slug"
					render={(props) => <DetailManga {...props} />}
				/>
				<Route
					path="/chapter/:chaptslug"
					render={(props) => <DetailChapter {...props} />}
				/>
				<Route path="/listmanga" render={(props) => <AllManga {...props} />} />
			</Router>
		</div>
	);
}

export default App;
