import "./App.css";
import React, { useState } from "react";
import header from "./components/header/header.js";
import footer from "./components/footer/footer.js";
import about from "./components/about/about.js";
import portfolio from "./components/portfolio/portfolio.js";
import contact from "./components/contact/contact.js";
import resume from "./components/proficiencies/proficiences.js";

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <about />;
			case "portfolio":
				return <portfolio />;
			case "contact":
				return <contact />;
			case "resume":
				return <resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;