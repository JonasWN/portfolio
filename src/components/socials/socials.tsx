import React from "react"
import { Github, Facebook, Linkedin } from "@styled-icons/boxicons-logos"
import { StyledSocials } from "./style"

const socials = [
  "https://github.com/JonasWN",
  "https://www.linkedin.com/in/jonas-w-nielsen/",
  "https://www.facebook.com/jonas.Wessman.Nielsen",
]

const Socials = () => {
  return (
    <StyledSocials>
      <li>
        <a href={socials[0]} target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Github style={{ width: "25px" }} />
        </a>
      </li>
      <li>
        <a href={socials[1]} target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Facebook style={{ width: "25px" }} />
        </a>
      </li>
      <li>
        <a href={socials[2]} target="_blank">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Linkedin style={{ width: "25px" }} />
        </a>
      </li>
    </StyledSocials>
  )
}

export { Socials }
