import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Living Real',
			description:
				'This is a property management system that is used by landlords viewing and managing their properties and for tenants to allow for maintenance requests and pay rent.',
			image: 'living-real-image.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'Heroku & AWS S3',
				'React.js',
				'MERN Stack',
			],
			github: 'https://github.com/P3T2-Realty-Rogues/living-real',
			deployed: 'https://living-real.herokuapp.com/',
		},
		{
			name: 'Auto Tracker',
			description:
				'This is your personal automobile information tracking system. Track time dependent, vehicle specific information from a single application, available on any web-enabled device.',
			image: 'auto-tracker-image.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: 'https://github.com/OwaisIslam/auto-tracker',
			deployed: 'https://team-3-auto-tracker.herokuapp.com/',
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