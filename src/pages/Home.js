import React from "react"
import Companies from "../components/Companies"
import Features from "../components/Features"
import Hero from "../components/Hero"
import SectionContent from "../components/SectionContent"
import SectionHeading from "../components/SectionHeading"
import ValueProps from "../components/ValueProps"
const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <SectionHeading />
      <ValueProps />
      <SectionContent />
      <Features />
    </>
  )
}

export default Home
