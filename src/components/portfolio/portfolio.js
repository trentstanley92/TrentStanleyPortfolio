import React from 'react';
import Project from '../projects/projects.js';

function Portfolio() {
	const projects = [
		{
			name: 'BiteBud',
			description:
				'Bite-Bud is a web application that allows users to search for local restaurants and attractions in any city and state of their choice. The application retrieves data from third-party APIs to provide users with relevant information about nearby restaurants and attractions.',
			image: 'bitebud.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
			],
			github: 'https://github.com/Suzakijun1/BiteBud',
			deployed: 'https://suzakijun1.github.io/BiteBud/',
		},
		{
			name: 'Social-Revue',
			description:
				'The Socials Revue App is a web application that allows users to create an account, post and delete reviews of different social media platforms. The application is built using Node.js, Express, and DBeaver for the database.',
			image: 'Social-Revue.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Sequelize',
				'DBeaver',
				'MySql2',
				'Bcrypt',
				'Express-Sessions',
				'Express-Handlebars',
				'DotEnv',
			],
			github: 'https://github.com/codemonkeyspoon/Social-Revue',
			deployed: 'http://localhost:3001',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;