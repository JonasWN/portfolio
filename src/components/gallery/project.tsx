import React, { useEffect } from "react"
import { StyledProject } from "./style"
import { useAnimation, motion } from "framer-motion"
import { stackVariants } from "../../styles/animations"

type Iprops = {
  enter: boolean
}

const Project: React.FC<Iprops> = ({ enter }) => {
  const animation = useAnimation()
  const { container, item } = stackVariants

  useEffect(() => {
    if (enter) animation.start("enter")
  }, [animation, enter])
  return (
    <StyledProject enter={enter} animate={animation}>
      <header>
        <h2>Project</h2>
        <section>
          <div />
          <p>01</p>
        </section>
      </header>
      <nav>
        <motion.ul variants={container} initial="initial">
          <motion.li variants={item}></motion.li>
          <motion.li variants={item}></motion.li>
          <motion.li variants={item}></motion.li>
          <motion.li variants={item}></motion.li>
        </motion.ul>
      </nav>
      <article>
        {/* <h3>Info</h3> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          veniam dignissimos maiores quam, labore repudiandae!
        </p>
      </article>
    </StyledProject>
  )
}

export default Project
