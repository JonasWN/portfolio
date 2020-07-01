import React, { useEffect } from "react"
import { StyledProject } from "./style"
import { useAnimation, motion, AnimatePresence } from "framer-motion"
import { stackVariants, slideY, easing } from "../../styles/animations"

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
          <p>0</p>
          <AnimatePresence exitBeforeEnter>
            <motion.span
              variants={slideY}
              key={index}
              animate="enter"
              initial="initial"
              exit="exit"
              transition={{
                duration: 0.2,
                ease: easing,
              }}
            >
              {index}
            </motion.span>
          </AnimatePresence>
        </section>
      </header>
      <nav>
        <motion.ul variants={container} initial="initial">
          {projects.map((project: object, index: number) => (
            <motion.li
              variants={item}
              key={index}
              onHoverStart={() => handleSlide(index)}
              onClick={() => handleSlide(index)}
              onTap={() => handleSlide(index)}
            />
          ))}
        </motion.ul>
      </nav>
      <article>
        <AnimatePresence exitBeforeEnter>
          <motion.p
            animate="enter"
            exit="exit"
            initial="initial"
            variants={slideY}
            key={index}
            transition={{
              delay: 0.1,
              duration: 0.2,
              ease: easing,
            }}
          >
            {description}
          </motion.p>
        </AnimatePresence>
      </article>
    </StyledProject>
  )
}

export default Project
