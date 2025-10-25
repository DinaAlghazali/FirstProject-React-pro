

import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import NotFoundSection from "../components/NotFoundSection";
import Footer from "../components/Footer";

export default function NotFoundPage() {
	return (
		<>
			<TopHeader />
			<main>
				<Header />
				<NotFoundSection />
			</main>
			<Footer />
		</>
	);
}
