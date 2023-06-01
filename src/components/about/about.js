import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/image0.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Hi my name is Trent Stanley, I am a full stack  web developer aiming to improve my skills and learn more.
					I am currently in the process of earning
					a certificate in full stack development from the
					University of Central Florida, with newly acquired
					skills in JavaScript, CSS, React.js, and more web development tools.
					My goal is to broaden my knowledge on what I have already learned and to challenge myself to stay learning.
					
				</p>
				<p>
					I have currently worked on two different projects with a third to be done within the month.
					Both of these projects contained working with up to four to five other full stack developers.
					I aim to improve my ability to work on projects with others by pushing my limits on what I am
					comfortable and make sure that I am creating a good team environment. 
				</p>
			</div>
		</section>
	);
}

export default About;