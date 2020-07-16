import React, { useState, useEffect } from "react"
import Phone from "./phone"
import { socials } from "../socials"
import { Link, withPrefix } from "gatsby"
//@ts-ignore
import Logo from "../../static/images/Logo.svg"
import { ArrowLeft } from "@styled-icons/feather"
import { StyledNav, StyledPhoneNav } from "./style"
import { AnimatePresence, motion } from "framer-motion"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import { Github, Facebook, Linkedin } from "@styled-icons/boxicons-logos"
import {
  stackVariantsNav,
  phoneNav,
  TextVariants,
} from "../../styles/animations"

const Nav = () => {
  const [sticky, setSticky] = useState<boolean>(true)
  const [overlay, setOverlay] = useState<boolean>(false)
  const [home, setHome] = useState<boolean>(true)
  const { container, item } = stackVariantsNav

  const handleClick = (event: boolean) => {
    handleOverlay(!overlay)

    overlay
      ? (document.body.style.overflow = "initial")
      : (document.body.style.overflow = "hidden")
  }

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

  useEffect(() => {
    const isHomepage = location.pathname === withPrefix("/")
    setHome(isHomepage)
  }, [])

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
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={TextVariants}
          >
            <Link to="/" aria-label="Home Page">
              {home ? <Logo /> : <ArrowLeft />}
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="#projekter" aria-label="Projekter">
              + Projekter
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/cv" aria-label="Cv Page">
              Cv
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to="/kontakt" aria-label="Kontakt Page">
              Kontakt
            </Link>
          </motion.li>
        </motion.ul>
        <Phone handleOverlay={handleClick} overlay={overlay} />
      </StyledNav>
      <AnimatePresence exitBeforeEnter>
        {overlay && (
          <StyledPhoneNav>
            <nav>
              <motion.ul variants={phoneNav.container}>
                <motion.li variants={phoneNav.item}>
                  <Link
                    to="/#projekter"
                    aria-label="Projekter"
                    onClick={() => handleClick(false)}
                  >
                    Projekter
                  </Link>
                </motion.li>
                <motion.li variants={phoneNav.item}>
                  <Link
                    to="/cv"
                    aria-label="Cv Page"
                    onClick={() => handleClick(false)}
                  >
                    Cv
                  </Link>
                </motion.li>
                <motion.li variants={phoneNav.item}>
                  <Link
                    to="/kontakt"
                    aria-label="Kontakt Page"
                    onClick={() => handleClick(false)}
                  >
                    Kontakt
                  </Link>
                </motion.li>
              </motion.ul>
              <motion.ul variants={container}>
                <motion.li variants={item}>
                  <a
                    href={socials[0]}
                    target="_blank"
                    aria-label="Github"
                    rel="noopener"
                  >
                    <Github />
                  </a>
                </motion.li>
                <motion.li variants={item}>
                  <a
                    href={socials[1]}
                    target="_blank"
                    aria-label="Linkedin"
                    rel="noopener"
                  >
                    <Linkedin />
                  </a>
                </motion.li>
                <motion.li variants={item}>
                  <a
                    href={socials[2]}
                    target="_blank"
                    aria-label="Facebook"
                    rel="noopener"
                  >
                    <Facebook />
                  </a>
                </motion.li>
              </motion.ul>
            </nav>
          </StyledPhoneNav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav
