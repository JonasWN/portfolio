import React from "react"
import { Link } from "gatsby"
import { StyledNav } from "./style"
//@ts-ignore
import Logo from "../../static/images/Logo.svg"

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/">
          <Logo />
        </Link>
      </li>
      <li>+</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </StyledNav>
)

export default Nav
