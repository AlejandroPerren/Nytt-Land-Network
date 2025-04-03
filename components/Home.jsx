"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StartScreen from "./Home/StartScreen/StartScreen";
import ResponsiveNav from "./NavBar/ResponsiveNavBar";
import Hero from "./Home/Hero/Hero";
import Header from "./Home/Header/Header";
import Donations from "./Donations/donations";
import Footer from "./Footer/Footer";

const Home = () => {
  const [started, setStarted] = useState(false);

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
      {!started && <StartScreen onStart={() => setStarted(true)} />}
      {started && (
        <>
          <Header />
          <ResponsiveNav />
          <Hero />
          <Donations/>
          <Footer/>
        </>
      )}
    </div>
  );
};

export default Home;
