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
				<p className="text-lg text-gray-700 text-justify">TODO</p>
			</div>
		</div>
	);
}
