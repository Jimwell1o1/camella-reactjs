import React, { useState } from "react";
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import HeaderLogo from '../components/HeaderLogo';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Houses from '../components/Houses';
import Contact from '../components/Contact';

function LandingPage() {
	const [isOpen, setIsOpen] = useState(false);
	const menuClick = () => {
		setIsOpen((prev) => !prev);
	};
	

	return (
		<>
			<HeaderLogo isOpen={isOpen} menuClick={menuClick} />
			<AppHeader isOpen={isOpen} />
			<Hero />
			<Projects />
			<Houses />
			<Contact />
			<AppFooter />
		</>
	);
}

export default LandingPage;