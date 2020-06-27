import React from "react"
import { Card } from "./card"
import Socials from "../socials"
import { StyledHero } from "./style"
import Particles from "react-tsparticles"
//@ts-ignore
import Face from "../../static/images/Face.svg"

const Hero = () => {
  return (
    <StyledHero>
      <Card />
      <Face className="face" />
      <Socials />
      <Particles
        params={particleParam}
        style={particleStyle}
        canvasClassName="particle"
      />
    </StyledHero>
  )
}

export default Hero

const particleParam = {
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
}

const particleStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: -1,
}
