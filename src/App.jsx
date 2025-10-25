import React from "react";
import { Outlet, Link } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <TopHeader />
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;