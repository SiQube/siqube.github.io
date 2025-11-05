import React from "react";

export default function About() {
	return (
		<div className="container mx-auto px-6 max-w-4xl">
			<h2 className="text-3xl font-semibold mb-4">About</h2>
			<div className="flex items-start gap-6">
				<img
					src="/david.jpg"
					alt="David R. Reich"
					className="w-32 h-32 rounded-full object-cover"
				/>
				<p className="text-lg text-gray-700 text-justify">
					I am Ph.D. student working on machine learning for eye movements and human-centered NLP.
					My supervisors are <a href="https://www.cl.uzh.ch/en/research-groups/digital-linguistics/people/group-leader/jaeger.html">Prof. Dr. Lena A. Jäger</a>,
                    <a href="https://www.uni-potsdam.de/de/cs-ml/staff/phd/prasse"> Dr. Paul Prasse</a> and
					I receive invaluable guidance from <a href="https://www.uni-potsdam.de/de/cs-ml/staff/contacts/scheffer">Prof. Dr. Tobias Scheffer</a>.
                    During my Ph.D., I had an excellent research internship at Adobe working with <a href="http://zoyathinks.com/">Zoya Bylinskii</a>.
					Before joining the University of Potsdam I completed my Bachelor's and
					Master's degrees in Mathematics from the Freie Universität Berlin and
					the Technische Universität Berlin, respectively.
					I am also a researcher at the University of Zurich.
				</p>
			</div>
		</div>
	);
}
