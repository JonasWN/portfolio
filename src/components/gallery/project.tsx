import React, { useEffect } from "react"
import { StyledProject } from "./style"
import { useAnimation, motion, AnimatePresence, useSpring } from "framer-motion"
import { stackVariants, slideY, easing, slideX } from "../../styles/animations"

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
  const x = useSpring(0)

  useEffect(() => {
    if (enter) animation.start("enter")
  }, [animation, enter])

  const handleSwipe = (event: any, info: any) => {
    info.offset.x > 0 ? handleSlide(index - 1) : handleSlide(index + 1)
  }

  return (
    <StyledProject enter={enter} animate={animation} current={index + 1}>
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
              {index + 1}
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
            variants={slideX}
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
      <motion.div
        className="gallery-swiper"
        drag={"x"}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleSwipe}
      />
    </StyledProject>
  )
}

export default Project
