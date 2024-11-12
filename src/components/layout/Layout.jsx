import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<header className="p-5 bg-blue-600 text-white">Header</header>
			<div className="min-h-dvh">
				<Outlet />
			</div>
			<footer>Footer</footer>
		</>
	);
};

export default Layout;
