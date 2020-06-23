import React from "react"
//@ts-ignore
import Face from "../../static/images/Face.svg"
import { StyledHero } from "./style"
import { Card } from "./card"
import Socials from "../socials"
import Particles from "react-tsparticles"

const Hero = () => {
  return (
    <StyledHero>
      <Card />
      <Face className="face" />
      <Socials />
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
        params={{
          background: {
            color: {
              value: "#f9fafc00",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#0F1320",
            },
            move: {
              enable: true,
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 6,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
    </StyledHero>
  )
}

export default Hero
