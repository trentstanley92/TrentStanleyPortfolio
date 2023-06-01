import React from "react";

function Proficiencies() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div>
				<h5>Front-End Proficiencies</h5>
				<ol>
					<li>JavaScript</li>
					<li>Bootstrap</li>
                    <li>jQuery</li>
					<li>React</li>
				</ol>
				<br></br>
				<h5>Back-End Proficiencies</h5>
				<ol>
                    <li>NodeJS</li>
					<li>APIs</li>
					<li>Express</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Dev Tool Proficiencies</h5>
				<ol>
					<li>Git</li>
					<li>npm</li>
					<li>Jest</li>
				</ol>
				<br></br>
				<h5>Database Proficiencies</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;