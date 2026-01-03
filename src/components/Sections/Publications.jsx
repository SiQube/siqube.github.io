import React from "react";

const categories = [
	{
		id: "inf-eye-movements",
		name: "Inferences from eye movements",
		description: "Here we treat eye movements as the independent variable, trying to infer or predict for example reading comprehension skill or subjective text difficulty.",
		papers: [
			{
				id: "eyebench",
				title: "EyeBench: Predictive Modeling from Eye Movements in Reading",
				venue: "NeurIPS 2025",
				visual: "/eyebench_visual.png",
				image: "/eyebench.png",
				links: {
					paper: "https://openreview.net/pdf?id=LhbYJJ3MFd",
					pdf: "https://openreview.net/pdf?id=LhbYJJ3MFd",
					project: "https://eyebench.github.io/",
					github: "https://github.com/EyeBench/eyebench"
				},
				abstract: "We present EyeBench, the first benchmark designed to evaluate machine learning models that decode cognitive and linguistic information from eye movements during reading.EyeBench offers an accessible entry point to the challenging and underexplored domain of modeling eye tracking data paired with text, aiming to foster innovation at the intersection of multimodal AI and cognitive science.The benchmark provides a standardized evaluation framework for predictive models, covering a diverse set of datasets and tasks, ranging from assessment of reading comprehension to detection of developmental dyslexia.Progress on the EyeBench challenge will pave the way for both practical real- world applications, such as adaptive user interfaces and personalized education, and scientific advances in understanding human language processing",
			},
			{
				id: "inferring",
				title: "Inferring Native and Non-Native Human Reading Comprehension and Subjective Text Difficulty from Scanpaths in Reading",
				venue: "ETRA 2022",
				visual: "/inferring_visual.png",
				image: "/inferring.png",
				links: {
					paper: "https://dl.acm.org/doi/10.1145/3517031.3529639",
					pdf: "https://dl.acm.org/doi/pdf/10.1145/3517031.3529639",
					project: "https://siqube.github.io/inferring",
					github: "https://github.com/aeye-lab/etra-reading-comprehension"
				},
				abstract: "Eye movements in reading are known to reflect cognitive processes involved in reading comprehension at all linguistic levels, from the sub-lexical to the discourse level. This means that reading comprehension and other properties of the text and/or the reader should be possible to infer from eye movements. Consequently, we develop the first neural sequence architecture for this type of tasks which models scan paths in reading and incorporates lexical, semantic and other linguistic features of the stimulus text. Our proposed model outperforms state-of-the-art models in various tasks. These include inferring reading comprehension or text difficulty, and assessing whether the reader is a native speaker of the text’s language. We further conduct an ablation study to investigate the impact of each component of our proposed neural network on its performance."
			}
		]
	},
	{
		id: "synth-eye-movements",
		name: "Synthesized eye movements",
		description: "Here we reverse the problem and treat eye movements as the dependent variable. We develop models that generate realistic eye movement patterns for a given text.",
		papers: [
			{
				id: "eyettention",
				title: "Eyettention: An Attention-based Dual-Sequence Model for Eye-tracking Data",
				venue: "ETRA 2023",
				visual: "/eyettention_visual.png",
				image: "/eyettention.png",
				links: {
					paper: "https://dl.acm.org/doi/10.1145/3591131",
					pdf: "https://dl.acm.org/doi/pdf/10.1145/3591131",
					project: "https://siqube.github.io/eyettention",
					github: "https://github.com/aeye-lab/eyettention"
				},
				abstract: "Eye movements during reading offer insights into both the reader's cognitive processes and the characteristics of the text that is being read. Hence, the analysis of scanpaths in reading have attracted increasing attention across fields, ranging from cognitive science over linguistics to computer science. In particular, eye-tracking-while-reading data has been argued to bear the potential to make machine-learning-based language models exhibit a more human-like linguistic behavior. However, one of the main challenges in modeling human scanpaths in reading is their dual-sequence nature: the words are ordered following the grammatical rules of the language, whereas the fixations are chronologically ordered. As humans do not strictly read from left-to-right, but rather skip or refixate words and regress to previous words, the alignment of the linguistic and the temporal sequence is non-trivial. In this paper, we develop Eyettention, the first dual-sequence model that simultaneously processes the sequence of words and the chronological sequence of fixations. The alignment of the two sequences is achieved by a cross-sequence attention mechanism. We show that Eyettention outperforms state-of-the-art models in predicting scanpaths. We provide an extensive within- and across-data set evaluation on different languages. An ablation study and qualitative analysis support an in-depth understanding of the model's behavior. movement data is a rich source of information about human cognitive processing. In this paper, we propose Eyettention, a novel dual-sequence model that leverages the temporal and spatial nature of eye-tracking data. By treating eye movements as a sequence of fixations and saccades, our model learns to attend to relevant parts of the scanpath to predict user characteristics or task performance. We demonstrate the effectiveness of Eyettention on multiple benchmark datasets, showing state-of-the-art performance in various classification tasks. The model's attention mechanism also provides interpretability, allowing us to visualize which parts of the eye movement sequence are most informative for the model's decisions."
			}
		]
	},
	{
		id: "corpora",
		name: "Eye-Tracking Corpora",
		description: "Data is the fuel for modern machine learning. We curate and release large-scale eye-tracking corpora to facilitate research in cognitive modeling and human-centered NLP.",
		papers: [
			{
				id: "emtec",
				title: "EMTeC: A Corpus of Eye Movements on Machine-Generated Texts",
				venue: "BRM 2025",
				visual: "/emtec_visual.png",
				image: "/emtec.png",
				links: {
					paper: "https://dl.acm.org/doi/10.1145/3517031.3529639",
					pdf: "https://dl.acm.org/doi/pdf/10.1145/3517031.3529639",
					project: "https://dili-lab.github.io/emtec",
					github: "https://github.com/dili-lab/emtec"
				},
				abstract: "The Eye movements on Machine-generated Texts Corpus (EMTeC) is a naturalistic eye-movements-while-reading corpus of 107 native English speakers reading machine-generated texts. The texts are generated by three large language models using five different decoding strategies, and they fall into six different text-type categories. EMTeC entails the eye movement data at all stages of pre-processing, i.e., the raw coordinate data sampled at 2000 Hz, the fixation sequences, and the reading measures. It further provides both the original and a corrected version of the fixation sequences, accounting for vertical calibration drift. Moreover, the corpus includes the language models' internals that underlie the generation of the stimulus texts."
			}
		]
	}
];

function SynthesizedAnimation() {
	const [step, setStep] = React.useState(0);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setStep((prev) => (prev + 1) % 3);
		}, 2000); // Change every 2 seconds
		return () => clearInterval(timer);
	}, []);

	const images = [
		{ src: "/synth_input.png", label: "Input Text" },
		{ src: "/synth_nn.png", label: "Neural Network Processing" },
		{ src: "/synth_output.png", label: "Synthesized Fixations" },
	];

	return (
		<div className="relative w-full h-full bg-gray-900">
			{images.map((img, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${step === index ? 'opacity-100' : 'opacity-0'}`}
				>
					<img
						src={img.src}
						alt={img.label}
						className="w-full h-full object-cover opacity-90"
					/>
				</div>
			))}

			{/* Progress Indicators */}
			<div className="absolute top-6 left-0 right-0 flex justify-center gap-2 z-10">
				{images.map((_, index) => (
					<div
						key={index}
						className={`h-1 rounded-full transition-all duration-500 ${step === index ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'}`}
					/>
				))}
			</div>

			{/* Label Overlay */}
			<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
				<p className="text-blue-200 text-sm font-mono transition-all duration-500">
					{step === 0 && "> Ingesting Text Data..."}
					{step === 1 && "> Neural Network Analysis..."}
					{step === 2 && "> Generating Eye Movements..."}
				</p>
			</div>
		</div>
	);
}

export default function Publications() {
	const [activeCategory, setActiveCategory] = React.useState(null);

	return (
		<div className="w-full">
			{/* Header Section - Scrolls away */}
			{/* Header Section - Scrolls away */}
			<div className="container mx-auto px-6 max-w-6xl py-12 min-h-[30vh] flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-4xl font-semibold mb-6">Selected Publications</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						A collection of my recent work in eye tracking, machine learning, and cognitive modeling.
						Each section below represents a research category.{" "}
						<a
							href="https://scholar.google.com/citations?user=Tc-NKJgAAAAJ&hl=de"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
						>
							View all publications on Google Scholar.
						</a>
					</p>
					<div className="mt-8 animate-bounce text-gray-400">
						↓
					</div>
				</div>
			</div>

			{/* Sticky Category Cards */}
			<div className="relative">
				{categories.map((category, index) => {
					// For now, we just show the first paper as the "featured" one for the category card
					const featuredPaper = category.papers[0];
					const isOverviewOpen = activeCategory === category.id;

					return (
						<div
							key={category.id}
							className="sticky top-0 h-screen bg-white border-t border-gray-100 shadow-sm flex flex-col transition-all duration-500"
							style={{ zIndex: index + 1 }}
						>
							<div className="container mx-auto px-6 max-w-7xl h-full flex flex-col pt-20 pb-6">
								{/* Category Header */}
								<div className="mb-4 flex-shrink-0 flex justify-between items-end border-b border-gray-100 pb-4">
									<div>
										<span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-1 block">Research Category</span>
										<h3 className="text-3xl font-bold text-gray-900">{category.name}</h3>
									</div>
									<button
										onClick={() => setActiveCategory(isOverviewOpen ? null : category.id)}
										className="text-sm font-medium px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
									>
										{isOverviewOpen ? "← Back to Featured Paper" : "View All Papers in Category →"}
									</button>
								</div>

								{/* Content Area */}
								<div className="flex-grow overflow-hidden relative bg-gray-50 rounded-xl border border-gray-200">

									{/* View 1: Featured Paper (Default) */}
									<div
										className={`absolute inset-0 grid lg:grid-cols-2 transition-transform duration-500 ease-in-out ${isOverviewOpen ? '-translate-x-full' : 'translate-x-0'}`}
									>
										{/* Animation/Visual Column */}
										<div className="h-full border-r border-gray-200 bg-gray-900 relative overflow-hidden group hidden lg:block">
											{category.id === "synth-eye-movements" ? (
												<SynthesizedAnimation />
											) : (
												<div className="relative w-full h-full">
													<img
														src={featuredPaper.visual}
														alt="Category Visualization"
														className="w-full h-full object-cover opacity-80"
													/>
													<div className="absolute inset-0 pointer-events-none">
														<div className="absolute w-full h-1 bg-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-scanline top-0 left-0" />
													</div>
													<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
														<p className="text-emerald-200 text-sm font-mono">Image by banana via antigravity...</p>
													</div>
												</div>
											)}
										</div>

										{/* Info Column */}
										<div className="h-full overflow-y-auto p-8 bg-white">
											<div className="mb-6">
												<span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded mb-2">Featured Paper</span>
												<h4 className="text-xl font-bold text-gray-900 leading-tight">{featuredPaper.title}</h4>
												<p className="text-gray-500 text-sm mt-2 flex flex-wrap gap-x-3 gap-y-1 items-center">
													<span>{featuredPaper.venue}</span>
													<span className="text-gray-300">•</span>
													<a href={featuredPaper.links.project} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
													<span className="text-gray-300">•</span>
													<a href={featuredPaper.links.paper} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View Paper</a>
													<span className="text-gray-300">•</span>
													<a href={featuredPaper.links.github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
												</p>
											</div>

											<div className="mb-8">
												<img
													src={featuredPaper.image}
													alt="Visual Abstract"
													className="w-full h-48 object-cover rounded-lg shadow-md border border-gray-100"
												/>
											</div>

											<div className="prose prose-sm prose-blue max-w-none text-gray-600 text-justify">
												<h5 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Abstract</h5>
												{featuredPaper.abstract}
											</div>

											<div className="mt-8">
												<a href={featuredPaper.links.pdf} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">Read PDF</a>
											</div>
										</div>
									</div>

									{/* View 2: Category Overview (Slide-in) */}
									<div
										className={`absolute inset-0 bg-white p-8 overflow-y-auto transition-transform duration-500 ease-in-out ${isOverviewOpen ? 'translate-x-0' : 'translate-x-full'}`}
									>
										<div className="max-w-4xl mx-auto">
											<h4 className="text-2xl font-bold mb-2">{category.name}</h4>
											<p className="text-gray-600 mb-8 text-lg">{category.description}</p>

											<div className="grid gap-6">
												{category.papers.map(paper => (
													<div key={paper.id} className="flex gap-6 p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white group">
														<div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
															<img src={paper.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
														</div>
														<div>
															<h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{paper.title}</h5>
															<div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
																<span className="font-medium bg-gray-100 px-2 py-0.5 rounded">{paper.venue}</span>
																<a href={paper.links.project} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">Project</a>
																<a href={paper.links.paper} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">Paper</a>
																<a href={paper.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">GitHub</a>
																<a href={paper.links.pdf} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">PDF</a>
															</div>
															<p className="text-gray-600 line-clamp-2 text-sm">{paper.abstract}</p>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					);
				})}
			</div>
			<style>{`
				@keyframes scanline {
					0% { top: 0%; opacity: 0; }
					10% { opacity: 1; }
					90% { opacity: 1; }
					100% { top: 100%; opacity: 0; }
				}
				@keyframes gaze-point {
					0% { top: 10%; left: 10%; }
					25% { top: 30%; left: 80%; }
					50% { top: 60%; left: 20%; }
					75% { top: 80%; left: 70%; }
					100% { top: 10%; left: 10%; }
				}
				.animate-scanline {
					animation: scanline 3s linear infinite;
				}
				.animate-gaze-point {
					animation: gaze-point 8s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}
