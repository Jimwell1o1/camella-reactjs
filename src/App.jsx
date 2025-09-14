import React, { useEffect } from "react";
import LandingPage from './pages/LandingPage';
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS

function App() {
	useEffect(() => {
		AOS.init({
		duration: 1000, // animation duration (ms)
		once: true,     // whether animation should happen only once
		});
	}, []);

	return (
		<div className="bg-gray-50 font-sans text-gray-800">
		<LandingPage />
		</div>
	);
}

export default App;