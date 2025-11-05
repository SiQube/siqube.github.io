import React, { forwardRef } from "react";

const Hero = forwardRef(function Hero({ onExplore }, ref) {
	const bgRef = React.useRef(null);

	React.useEffect(() => {
		const handleScroll = () => {
			if (!bgRef.current) return;
			// We can use window.scrollY directly since Hero is at the top
			const scrolled = window.scrollY;
			// Only animate if we're near the top to save performance
			if (scrolled > window.innerHeight) return;

			// Parallax + Zoom effect
			// TranslateY: Move down slower than scroll (parallax)
			// Scale: Zoom in slightly
			bgRef.current.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0) scale(${1 + scrolled * 0.0005})`;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			id="home"
			ref={ref}
			className="min-h-screen snap-start flex items-center justify-center relative overflow-hidden"
		>
			{/* Animated Background Layer */}
			<div
				ref={bgRef}
				className="absolute inset-0 bg-cover bg-center will-change-transform"
				style={{
					backgroundImage: "url('/Gemini_Generated_Image_vu345jvu345jvu34.png')",
				}}
			/>

			{/* Overlay Gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none z-0" />

			{/* Content */}
			<div className="container mx-auto px-6 relative z-10 text-center">
				<h1 className="text-5xl md:text-7xl font-light tracking-tight text-white">
					David R. Reich
				</h1>
				<p className="mt-4 text-xl md:text-2xl text-white/90">
					PhD Student — Machine Learning · Eye‑Tracking · NLP · Mathematics
				</p>

				<div className="mt-8 flex flex-col items-center gap-6">
					<button
						onClick={onExplore}
						className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 text-black font-medium shadow-lg hover:scale-105 transition-transform"
						type="button"
					>
						Learn more
					</button>

					<div className="flex gap-6">
						<a
							href="https://github.com/siqube"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 hover:text-white hover:scale-110 transition-all"
							aria-label="GitHub"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
							</svg>
						</a>
						<a
							href="https://scholar.google.com/citations?user=Tc-NKJgAAAAJ&hl=de"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 hover:text-white hover:scale-110 transition-all"
							aria-label="Google Scholar"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/david-r-reich-6a148b166/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 hover:text-white hover:scale-110 transition-all"
							aria-label="LinkedIn"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<svg
				className="absolute -bottom-10 right-8 w-60 opacity-40 animate-float z-10"
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
