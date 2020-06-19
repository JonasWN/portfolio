import React, { useState } from "react"
import { Link } from "gatsby"
import { StyledNav, StyledPhoneNav } from "./style"
import { useScrollPosition } from "../../hooks/useScrollPosition"
//@ts-ignore
import Logo from "../../static/images/Logo.svg"
import Phone from "./phone"
import { AnimatePresence } from "framer-motion"

const Nav = () => {
  const [sticky, setSticky] = useState<boolean>(true)
  const [overlay, setOverlay] = useState<boolean>(false)

  const handleOverlay = (event: boolean) => {
    setOverlay(event)
  }

  useScrollPosition(
    ({ prevPos, currPos }: any) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky]
  )
  return (
    <>
      <StyledNav show={sticky} overlay={overlay}>
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
        <Phone handleOverlay={handleOverlay} overlay={overlay} />
      </StyledNav>
      <AnimatePresence exitBeforeEnter>
        {overlay && <StyledPhoneNav />}
      </AnimatePresence>
    </>
  )
}

export default Nav
