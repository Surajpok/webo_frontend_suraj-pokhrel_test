import React from "react"
import Companies from "../components/Companies"
import Faq from "../components/reuseable/Faq"
import Features from "../components/Features"
import Hero from "../components/Hero"
import SectionContent from "../components/SectionContent"
import SectionHeading from "../components/SectionHeading"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import ValueProps from "../components/ValueProps"
import { FAQ } from "../data"
import FrequentlyAsked from "../components/FrequentlyAsked"
import Discover from "../components/Discover"
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
      <FrequentlyAsked />
      <Discover />
    </>
  )
}

export default Home
