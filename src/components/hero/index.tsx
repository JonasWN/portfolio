import React from "react"
//@ts-ignore
import Face from "../../static/images/Face.svg"
import { StyledHero } from "./style"
import { Card } from "./card"
import Socials from "../socials"

const Hero = () => {
  return (
    <StyledHero>
      <Card />
      <Face className="face" />
      <Socials />
    </StyledHero>
  )
}

export default Hero
