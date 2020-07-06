import React from "react"
import { Github, Facebook, Linkedin } from "@styled-icons/boxicons-logos"
import { StyledSocials } from "./style"
import { stackVariantsX } from "../../styles/animations"
import { motion } from "framer-motion"

export const socials = [
  "https://github.com/JonasWN",
  "https://www.linkedin.com/in/jonas-w-nielsen/",
  "https://www.facebook.com/jonas.Wessman.Nielsen",
]

const Socials = () => {
  const { container, item } = stackVariantsX
  const width = {
    width: "25px",
  }

  return (
    <StyledSocials variants={container} animate="enter" initial="initial">
      <motion.li variants={item}>
        <a href={socials[0]} target="_blank" aria-label="Github" rel="noopener">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Github style={width} />
        </a>
      </motion.li>
      <motion.li variants={item}>
        <a
          href={socials[1]}
          target="_blank"
          aria-label="Linkedin"
          rel="noopener"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Linkedin style={width} />
        </a>
      </motion.li>
      <motion.li variants={item}>
        <a
          href={socials[2]}
          target="_blank"
          aria-label="Facebook"
          rel="noopener"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Facebook style={width} />
        </a>
      </motion.li>
    </StyledSocials>
  )
}

export default Socials
