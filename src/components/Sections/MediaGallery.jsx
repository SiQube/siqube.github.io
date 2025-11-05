import React from "react";

export default function MediaGallery({ galleryRef }) {
	const mediaItems = [
		{
			id: "zoom-recording",
			title: "Eye Tracking and NLP Tutorial",
			description: "Introduction to human-centered NLP via eye tracking.",
			emoji: "📄 + 👀 = 🤯",
			link: "https://us06web.zoom.us/rec/play/IXxvg0OFbzXeSN_WnZJlSOoAelR80-0u48FQjhJZ7W38mH0kOtmAA3ct06qjGgctub0pukbqq6K_CVAb.isn-a5i6mN-oKyiS?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2FRBqh3FfpLZ9jyv1py41VFHH2IbUh92y16f-Sau0EexhEVKzX7c2IMNFg50BRxCCw.Wj9YT8DdWrkejGYm",
			website: "https://acl2025-eyetracking-and-nlp.github.io/",
			type: "video"
		},
		...Array.from({ length: 0 }, (_, i) => ({
			id: `media-item-${i}`,
			title: `Talk / Demo ${i + 2}`,
			description: "Short description — recorded talk or plotted demo.",
			image: `/gallery-${i + 2}.jpg`,
			link: "#",
			type: "image"
		}))
	];

	return (
		<div className="container mx-auto px-6 max-w-6xl">
			<h2 className="text-3xl font-semibold mb-6">Media & Gallery</h2>

			<div
				ref={galleryRef}
				className="overflow-x-auto no-scrollbar whitespace-nowrap gap-6 py-4 px-2 scroll-smooth snap-x snap-mandatory"
				style={{ WebkitOverflowScrolling: "touch" }}
			>
				{mediaItems.map((item) => (
					<div
						key={item.id}
						className="inline-block align-top w-80 flex-shrink-0 snap-center bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
					>
						<div className="h-48 bg-gray-100 relative group flex items-center justify-center overflow-hidden">
							{item.emoji ? (
								<div className="text-6xl select-none animate-pulse">
									{item.emoji}
								</div>
							) : (
								<img
									src={item.image}
									alt={item.title}
									className="object-cover h-full w-full"
									onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Media"; }}
								/>
							)}

							{item.type === "video" && (
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors"
								>
									<div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
										<svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
											<path d="M8 5v14l11-7z" />
										</svg>
									</div>
								</a>
							)}
						</div>
						<div className="p-5 whitespace-normal">
							<h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
							<p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
								{item.description}
							</p>
							<div className="flex flex-col gap-2">
								{item.type === "video" ? (
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
									>
										Watch Recording
										<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								) : (
									<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Coming Soon</span>
								)}
								{item.website && (
									<a
										href={item.website}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
									>
										Visit Website
										<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
