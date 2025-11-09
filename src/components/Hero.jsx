import React, { forwardRef } from "react";

const Hero = forwardRef(function Hero({ onExplore }, ref) {
	return (
		<header
			id="home"
			ref={ref}
			className="min-h-screen snap-start flex items-center justify-center relative overflow-hidden bg-cover bg-center"
			style={{
				backgroundImage: "url('/david.jpg')",
				backgroundAttachment: "fixed",
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
			<div className="container mx-auto px-6 relative z-10 text-center">
				<h1 className="text-5xl md:text-7xl font-light tracking-tight text-white">
					David R. Reich
				</h1>
				<p className="mt-4 text-xl md:text-2xl text-white/90">
					PhD Student — Machine Learning · Eye‑Tracking · NLP · Mathematics
				</p>

				<div className="mt-8">
					<button
						onClick={onExplore}
						className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 text-black font-medium shadow-lg hover:scale-105 transition-transform"
						type="button"
					>
						Learn more
					</button>
				</div>
			</div>

			<svg
				className="absolute -bottom-10 right-8 w-60 opacity-40 animate-float"
				aria-label="Gradient shape"
				viewBox="0 0 200 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="g1" x1="0" x2="1">
						<stop offset="0%" stopColor="#fff" stopOpacity="0.08" />
						<stop offset="100%" stopColor="#fff" stopOpacity="0.02" />
					</linearGradient>
				</defs>
				<rect x="0" y="0" width="200" height="200" fill="url(#g1)" />
			</svg>
		</header>
	);
});

export default Hero;
