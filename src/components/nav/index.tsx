import React from "react"
import { Link } from "gatsby"
import { StyledNav } from "./style"
//@ts-ignore
import Logo from "../../static/images/Logo.svg"
import Phone from "./phone"

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/" aria-label="home-page">
          <Logo />
        </Link>
      </li>
      <li>+</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <Phone />
  </StyledNav>
)

export default Nav
