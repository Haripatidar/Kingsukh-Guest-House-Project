import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";
import Service from "../../components/Service/Service";
import Rooms from "../../components/Rooms/Rooms";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <>
    {/* Header */}
      <Header />
    {/* Hero  */}
      <Hero />
    {/* About */}
      <About />
    {/* Rooms */}
      <Rooms />
    {/* Service */}
      <Service />
    {/* Gallery */}
      <Gallery/>
    {/* Contact */}
    <Contact/>
    {/* Map */}
    <Map/>
    {/* Footer */}
    <Footer/>
    </>
  );
}

export default Home;
