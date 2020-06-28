import React, { useState } from "react"
import { Link } from "gatsby"
import { StyledNav, StyledPhoneNav } from "./style"
import { useScrollPosition } from "../../hooks/useScrollPosition"
//@ts-ignore
import Logo from "../../static/images/Logo.svg"
import Phone from "./phone"
import { AnimatePresence, motion } from "framer-motion"
import { stackVariantsX, TextVariants } from "../../styles/animations"

const Nav = () => {
  const [sticky, setSticky] = useState<boolean>(true)
  const [overlay, setOverlay] = useState<boolean>(false)
  const { container, item } = stackVariantsX

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
      <StyledNav
        show={sticky}
        overlay={overlay}
        animate={"enter"}
        initial="initial"
      >
        <motion.ul variants={container}>
          <motion.li
            animate="enterY"
            initial="initialY"
            transition={{ duration: 0.6, delay: 1.9 }}
            variants={TextVariants}
          >
            <Link to="/" aria-label="home-page">
              <Logo />
            </Link>
          </motion.li>
          <motion.li variants={item}>+</motion.li>
          <motion.li variants={item}>Projects</motion.li>
          <motion.li variants={item}>About</motion.li>
          <motion.li variants={item}>Contact</motion.li>
        </motion.ul>
        <Phone handleOverlay={handleOverlay} overlay={overlay} />
      </StyledNav>
      <AnimatePresence exitBeforeEnter>
        {overlay && <StyledPhoneNav />}
      </AnimatePresence>
    </>
  )
}

export default Nav
