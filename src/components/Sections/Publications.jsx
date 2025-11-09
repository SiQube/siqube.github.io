import React from "react";

export default function Publications() {
	return (
		<div className="container mx-auto px-6 max-w-4xl">
			<h2 className="text-3xl font-semibold mb-4">Selected Publications</h2>
			<ul className="space-y-3 text-gray-800">
				<li>
					<strong>Eyettention</strong> — TODO (ETRA 2023).{" "}
					<a
						href="https://dl.acm.org/doi/10.1145/3591131"
						className="text-sm underline"
					>
						PDF
					</a>
				</li>
			</ul>
		</div>
	);
}
