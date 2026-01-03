import React from "react";

export default function Nav({ sections, active, onNavigate }) {
	return (
		<nav className="fixed inset-x-0 top-14 z-40 flex justify-center">
			<ul className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 flex gap-2 shadow-md">
				{sections.map((s) => (
					<li key={s.id}>
						<button
							onClick={() => onNavigate(s.id)}
							className={`text-sm px-3 py-1 rounded-full font-medium transition-colors duration-200 ${active === s.id ? "bg-black text-white" : "text-gray-800"}`}
							type="button"
						>
							{s.label}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
