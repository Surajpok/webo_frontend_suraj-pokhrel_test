import React from "react"
import Companies from "../components/Companies"
import Features from "../components/Features"
import Hero from "../components/Hero"
import SectionContent from "../components/SectionContent"
import SectionHeading from "../components/SectionHeading"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import ValueProps from "../components/ValueProps"
import FrequentlyAsked from "../components/FrequentlyAsked"
import Discover from "../components/Discover"
import RecentBlog from "../components/RecentBlog"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <SectionHeading />
      <ValueProps />
      <SectionContent />
      <Features />
      <Testimonials />
      <Stats />
      <RecentBlog />
      <FrequentlyAsked />
      <Discover />
      <Footer />
    </>
  )
}

export default Home
