import React, { useState } from "react"
import { Link } from "gatsby"
import { StyledNav, StyledPhoneNav } from "./style"
import { useScrollPosition } from "../../hooks/useScrollPosition"
//@ts-ignore
import Logo from "../../static/images/Logo.svg"
import Phone from "./phone"

const Nav = () => {
  const [sticky, setSticky] = useState<boolean>(true)

  useScrollPosition(
    ({ prevPos, currPos }: any) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky]
  )

  return (
    <>
      <StyledNav show={sticky}>
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
    </>
  )
}

export default Nav
