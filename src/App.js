import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/proficiencies";

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "About":
				return <About />;
			case "Portfolio":
				return <Portfolio />;
			case "Contact":
				return <Contact />;
			case "Resume":
				return <Resume />;
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