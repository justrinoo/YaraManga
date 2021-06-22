import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailManga from "./pages/DetailManga";
import DetailChapter from "./pages/DetailChapter";
function App() {
	window.document.title = "Yara Manga";
	return (
		<div className="App">
			<Router>
				<Route exact path="/" render={(props) => <LandingPage {...props} />} />
				<Route
					path="/:type/detail/:slug"
					render={(props) => <DetailManga {...props} />}
				/>
				<Route
					path="/chapter/:chaptslug"
					render={(props) => <DetailChapter {...props} />}
				/>
			</Router>
		</div>
	);
}

export default App;
