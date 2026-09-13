import Hero from "../components/Hero";
import About from "../components/About";
import BusinessAreas from "../components/BusinessAreas";
import ManagingPartners from "../components/ManagingPartners";

import Contact from "../components/Contact";
import Services from "../components/explore/Services";
import Products from "../components/explore/Products";
import Pricing from "../components/explore/Pricing";
import Mission from "../components/Mission";
import CoreBusinessAreas from "../components/CoreBusinessAreas";

function HomePage() {
  return (
    <>
      <main>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="mission"><Mission /></section>    
      <section id="core-business"><CoreBusinessAreas /></section>
      <section id="services"><Services /></section>
      <section id="products"><Products /></section>
      
      <section id="pricing"><Pricing /></section>
      <section id="business"><BusinessAreas /></section>
      <section id="leadership"><ManagingPartners /></section>
      <section id="contact"><Contact /></section>
    </main>
  
    </>
  );
}

export default HomePage;