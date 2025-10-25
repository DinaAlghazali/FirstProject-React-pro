import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FlashSales from "../components/FlashSales";
import BrowseByCategory from "../components/BrowseByCategory";
import BestSellingProducts from "../components/BestSellingProducts";
import ExploreProducts from "../components/ExploreProducts";
import PromoBanner from "../components/PromoBanner";
import FeaturesSection from "../components/FeaturesSection";
import NewArrival from "../components/NewArrival";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
        <HeroSection />
        <FlashSales />
        <BrowseByCategory />
        <BestSellingProducts />
        <PromoBanner />
        <ExploreProducts />
        <NewArrival />
        <FeaturesSection />
        {/* <Banner /> */}
        {/* <FlashSales /> */}
        {/* <ProductGrid title="New Arrivals" /> */}
        {/* <ProductGrid title="Best Sellers" /> */}
        {/* <Services /> */}
    </>
  );
}
