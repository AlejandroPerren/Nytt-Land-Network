"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveNav from "./NavBar/ResponsiveNavBar";
import Hero from "./Home/Hero/Hero";
import Header from "./Home/Header/Header";
import Donations from "./Donations/donations";
import Footer from "./Footer/Footer";
import SocialModal from "./ModalDev/SocialModalDev";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div>
      <Header />
      <ResponsiveNav />
      <Hero />
      <Donations />
      <Footer />
      <SocialModal />
    </div>
  );
};

export default Home;
