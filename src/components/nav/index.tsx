import React from "react"
import { Link } from "gatsby"
import { StyledNav } from "./style"

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/"> Jonas-Nielsen </Link>
      </li>
      <li>+</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </StyledNav>
)

export default Nav
