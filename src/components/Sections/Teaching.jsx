import React, { useEffect, useRef, useState } from "react";

export default function Teaching() {
	const containerRef = useRef(null);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Calculate progress based on how far the container has scrolled
			// Start transitioning when the top of the container hits the top of the viewport
			// (or slightly before/after depending on desired feel)
			const totalDistance = rect.height - windowHeight;
			const scrolled = -rect.top;

			// Normalize: 0 when top aligns, 1 when bottom aligns (roughly)
			// We want the transition to occur during the middle part of the scroll
			let p = scrolled / totalDistance;

			// Clamp and adjust curve
			// 0 to 0.3: Show Overview
			// 0.3 to 0.7: Transition
			// 0.7 to 1.0: Show History
			p = (p - 0.2) * 2; // Shift and scale to make transition faster/later
			p = Math.max(0, Math.min(1, p));

			setProgress(p);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Initial check
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		// Increased height to allow scrolling "through" the transition
		<div ref={containerRef} className="relative min-h-[250vh] w-full">
			<div className="sticky top-0 h-screen flex items-center overflow-hidden w-full">
				{/* Grid stack for perfect centering */}
				<div className="container mx-auto px-6 max-w-4xl grid grid-cols-1 grid-rows-1 items-center">

					{/* Overview Section */}
					<div
						className="col-start-1 row-start-1 transition-all duration-500 ease-out w-full"
						style={{
							opacity: 1 - Math.pow(progress, 1.5), // Fade out slightly faster
							transform: `translateY(${-progress * 100}px) scale(${1 - progress * 0.1})`,
							filter: `blur(${progress * 10}px)`,
							pointerEvents: progress > 0.4 ? 'none' : 'auto',
							zIndex: 10
						}}
					>
						<h2 className="text-3xl font-semibold mb-8 md:text-left">Teaching</h2>
						<div className="grid md:grid-cols-2 gap-12 text-gray-700">
							<div>
								<h3 className="font-medium text-xl mb-4 text-blue-600">Current</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<span className="mr-2">•</span>
										<span>Research Module Machine Learning <span className="text-gray-500 text-sm block">(University of Potsdam)</span></span>
									</li>
									<li className="flex items-start">
										<span className="mr-2">•</span>
										<span>IDA & ML II <span className="text-gray-500 text-sm block">(University of Potsdam)</span></span>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="font-medium text-xl mb-4 text-blue-600">Previous</h3>
								<ul className="space-y-3">
									<li className="flex items-start">
										<span className="mr-2">•</span>
										<span>IDA & ML I <span className="text-gray-500 text-sm block">(University of Potsdam)</span></span>
									</li>
									<li className="flex items-start">
										<span className="mr-2">•</span>
										<span>Advanced Machine Learning <span className="text-gray-500 text-sm block">(University of Zurich)</span></span>
									</li>
									<li className="flex items-start">
										<span className="mr-2">•</span>
										<span>Eye tracking: Experiment design and ML <span className="text-gray-500 text-sm block">(University of Zurich)</span></span>
									</li>
								</ul>
							</div>
						</div>
						<div className="mt-12 text-center animate-bounce text-gray-400">
							<p className="text-sm">Scroll for history ↓</p>
						</div>
					</div>

					{/* History Section */}
					<div
						className="col-start-1 row-start-1 transition-all duration-500 ease-out w-full"
						style={{
							opacity: Math.pow(progress, 3), // Fade in later
							transform: `translateY(${(1 - progress) * 100}px)`,
							filter: `blur(${(1 - progress) * 10}px)`,
							pointerEvents: progress < 0.6 ? 'none' : 'auto',
							zIndex: 20
						}}
					>
						<h2 className="text-3xl font-semibold mb-8 md:text-left">Teaching History</h2>
						<div className="text-gray-700 space-y-8">
							<div className="border-l-4 border-blue-200 pl-6 ml-2">
								<h3 className="font-medium text-xl">University of Potsdam</h3>
								<p className="text-sm text-gray-500 mb-3">2020 - Present</p>
								<ul className="space-y-2">
									<li className="text-sm"><strong className="text-gray-900">IDA & ML I:</strong> Introduction to data analysis concepts and basic ML algorithms.</li>
									<li className="text-sm"><strong className="text-gray-900">IDA & ML II:</strong> Advanced topics in Intelligent Data Analysis and Machine Learning.</li>
									<li className="text-sm"><strong className="text-gray-900">Research Module Machine Learning:</strong> Supervised student research projects focusing on applied machine and deep learning.</li>
								</ul>
							</div>

							<div className="border-l-4 border-blue-200 pl-6 ml-2">
								<h3 className="font-medium text-xl">University of Zurich</h3>
								<p className="text-sm text-gray-500 mb-3">2022 - present</p>
								<ul className="space-y-2">
									<li className="text-sm"><strong className="text-gray-900">Advanced Machine Learning:</strong> Preparing students to be research ready.</li>
									<p className="text-sm text-gray-500 mb-3">2021 - 2022</p>
									<li className="text-sm"><strong className="text-gray-900">Eye tracking: Experiment design and ML:</strong> Practical course from experiment design to modeling eye-tracking data.</li>
								</ul>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}
