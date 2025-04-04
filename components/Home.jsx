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
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/img/fondo.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent" />
      </div>

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
