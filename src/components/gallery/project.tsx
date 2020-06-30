import React, { useEffect } from "react"
import { StyledProject } from "./style"
import { useAnimation, motion } from "framer-motion"
import { stackVariants, slide, slideY } from "../../styles/animations"

type Iprops = {
  enter: boolean
  handleSlide: (index: number) => void
  description: string
  projects: object[]
  index: number
}

const Project: React.FC<Iprops> = ({
  enter,
  handleSlide,
  description,
  projects,
  index,
}) => {
  const animation = useAnimation()
  const { container, item } = stackVariants

  useEffect(() => {
    if (enter) animation.start("enter")
  }, [animation, enter])

  const controls = useAnimation()

  useEffect(() => {
    controls.set("initial")
    controls.start("enter")
  }, [index])

  return (
    <StyledProject enter={enter} animate={animation} current={index}>
      <header>
        <h2>Project</h2>
        <section>
          <div />
          <p>0</p>
          <motion.span animate={controls} variants={slideY}>
            {index}
          </motion.span>
        </section>
      </header>
      <nav>
        <motion.ul variants={container} initial="initial">
          {projects.map((project: object, index: number) => (
            <motion.li
              variants={item}
              key={index}
              onHoverStart={() => handleSlide(index)}
            />
          ))}
        </motion.ul>
      </nav>
      <article>
        <motion.p animate={controls} variants={slideY}>
          {description}
        </motion.p>
      </article>
    </StyledProject>
  )
}

export default Project
