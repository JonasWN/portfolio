import React, { useEffect } from "react"
import { StyledProject } from "./style"
import { useAnimation, motion } from "framer-motion"
import { stackVariants } from "../../styles/animations"

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

  return (
    <StyledProject enter={enter} animate={animation} current={index}>
      <header>
        <h2>Project</h2>
        <section>
          <div />
          <p>0{index}</p>
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
        <p>{description}</p>
      </article>
    </StyledProject>
  )
}

export default Project
