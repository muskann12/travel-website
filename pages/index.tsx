import React, { useState } from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import MobileNav from "@/components/helper/MobileNav";
import Hero from "@/components/Hero";
import TopDestination from "@/components/TopDestination";
import Hotels from "@/components/Hotels";
import { Reviews } from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNavHandler = () => setNav(true);
  const closeNavHandler = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Travel Website - Home</title>
        <meta name="description" content="Explore top destinations, hotels, and more." />
      </Head>

      {/* Mobile Navigation */}
      <MobileNav nav={nav} closeNav={closeNavHandler} />

      {/* Navbar with Routing Links */}
      <Navbar openNav={openNavHandler} />

      {/* Hero Section */}
      <Hero />

      {/* Top Destinations */}
      <TopDestination />

      {/* Hotels Section */}
      <Hotels />

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
