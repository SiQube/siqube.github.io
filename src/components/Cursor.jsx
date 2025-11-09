import React, { forwardRef } from "react";

const Cursor = forwardRef(function Cursor(_, ref) {
	return (
		<div
			ref={ref}
			className="pointer-events-none fixed w-5 h-5 rounded-full bg-black z-50 opacity-80 transform transition-transform duration-75"
			style={{ mixBlendMode: "difference" }}
		/>
	);
});

export default Cursor;
