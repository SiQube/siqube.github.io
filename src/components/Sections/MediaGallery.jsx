import React from "react";

export default function MediaGallery({ galleryRef }) {
	return (
		<div className="container mx-auto px-6 max-w-6xl">
			<h2 className="text-3xl font-semibold mb-6">Media & Gallery</h2>

			<div
				ref={galleryRef}
				className="overflow-x-auto no-scrollbar whitespace-nowrap gap-6 py-4 px-2 scroll-smooth snap-x snap-mandatory"
				style={{ WebkitOverflowScrolling: "touch" }}
			>
				{Array.from({ length: 6 }, (_, i) => `media-item-${i}`).map((id) => (
					<div
						key={id}
						className="inline-block align-top w-72 snap-center bg-white rounded-xl shadow-lg mr-6 overflow-hidden"
					>
						<div className="h-44 bg-gray-100 flex items-center justify-center">
							<img
								src={`/gallery-${id + 1}.jpg`}
								alt={`media-${id + 1}`}
								className="object-cover h-full w-full"
							/>
						</div>
						<div className="p-4">
							<h3 className="font-medium">Talk / Demo {id + 1}</h3>
							<p className="text-sm text-gray-600 mt-1">
								Short description — recorded talk or plotted demo.
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
