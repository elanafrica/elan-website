import Image from "next/image";

import Button from "@/components/Button";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Careers from "./Careers";
import ContactUs from "./ContactUs";
import OurWork from "./OurWork";
import Portfolio from "./Portfolio";
import PrivacyTermsCondition from "./PrivacyTermsCondition";
import Services from "./Services";
import Testimonials from "./Testimonials";
import TrainingProg from "./TrainingProg";
import FAQ from "./FAQ";
import Layout from "../components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HomePage />
        <AboutUs />
        <Blog />
        <Careers />
        <ContactUs />
        <OurWork />
        <Portfolio />
        <PrivacyTermsCondition />
        <Services />
        <Testimonials />
        <TrainingProg />
        <FAQ />
      </main>
    </>
  );
}
