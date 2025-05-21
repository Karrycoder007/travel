import Image from "next/image";
import Hero from "./components/Hero";

import AboutUs from "./components/About";
import PopularDestinations from "./components/PopularDestinations";
import FeaturedPackages from "./components/FeaturedPackages";
import BusBookingPreview from "./components/BusBookingPreview";
import NewsletterSection from "./components/NewsletterSection";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
    
    <Hero/>
    <AboutUs/>
    <PopularDestinations/>
    <BusBookingPreview/>
    <FeaturedPackages/>
    <NewsletterSection/>
    
    
    </>
  );
}
