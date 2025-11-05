import React from "react";

export default function Contact() {
	return (
		<div className="container mx-auto px-6 max-w-4xl">
			<h2 className="text-3xl font-semibold mb-4">Contact</h2>
			<p className="text-gray-700 mb-4">
				Email —{" "}
				<a className="underline" href="mailto:davidrobert.reich@uzh.ch">
					firstname.lastname[at]uni-potsdam.de
				</a>
			</p>
			<form className="grid grid-cols-1 gap-4 max-w-xl">
				<input className="p-3 border rounded" placeholder="Your name" />
				<input className="p-3 border rounded" placeholder="Email" />
				<textarea
					className="p-3 border rounded"
					rows={5}
					placeholder="Message"
				/>
				<button
					className="self-start px-6 py-2 rounded bg-black text-white"
					type="submit"
				>
					Send
				</button>
			</form>
		</div>
	);
}
