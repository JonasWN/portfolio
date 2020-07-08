import React from "react"
import { StyledFooter } from "./style"
import { socials } from "../socials/index"

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} - ALL Rights Reserved</p>
      <ul>
        <li>
          <a
            href={socials[0]}
            target="_blank"
            aria-label="Github"
            rel="noopener"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href={socials[1]}
            target="_blank"
            aria-label="Linkedin"
            rel="noopener"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href={socials[2]}
            target="_blank"
            aria-label="Codepen"
            rel="noopener"
          >
            Codepen
          </a>
        </li>
      </ul>
    </StyledFooter>
  )
}

export default Footer
