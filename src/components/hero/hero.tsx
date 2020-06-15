import React from "react"
//@ts-ignore
//@ts-ignore
import Face from "../../static/images/Face.svg"
import { StyledHero } from "./style"
import { Card } from "./card"
//@ts-ignore

const Hero = () => {
  return (
    <StyledHero>
      <Card />
      <img src={Face} alt="hero-face-image" />
    </StyledHero>
  )
}

export { Hero }
