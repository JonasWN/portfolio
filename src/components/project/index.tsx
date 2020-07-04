import React, { useEffect } from "react"
import { StyledProject } from "./style"
import { useAnimation, motion, AnimatePresence } from "framer-motion"
import { stackVariants, slideY, easing, slideX } from "../../styles/animations"
import { useRecoilValue } from "recoil"
import {
  projectListState,
  projectState,
  projectIndexState,
} from "../../recoil/atoms"

type Tprops = {
  enter: boolean
  handleSlide: (index: number) => void
}

type Tproject = {
  title: string
  description: string
  date: string
  link: string
  stack: string[]
}

const Project: React.FC<Tprops> = ({ enter, handleSlide }) => {
  const projectList = useRecoilValue(projectListState)
  const data = useRecoilValue(projectState)
  const slideIndex = useRecoilValue(projectIndexState)

  const { container, item } = stackVariants
  const animation = useAnimation()

  useEffect(() => {
    if (enter) animation.start("enter")
  }, [animation, enter])

  const handleSwipe = (event: any, info: any) => {
    info.offset.x > 0
      ? handleSlide(slideIndex - 1)
      : handleSlide(slideIndex + 1)
  }

  return (
    <StyledProject enter={enter} animate={animation} current={slideIndex + 1}>
      <header>
        <h2>Project</h2>
        <section>
          <div />
          <p>0</p>
          <AnimatePresence exitBeforeEnter>
            <motion.span
              variants={slideY}
              key={slideIndex}
              animate="enter"
              initial="initial"
              exit="exit"
              transition={{
                duration: 0.2,
                ease: easing,
              }}
            >
              {slideIndex + 1}
            </motion.span>
          </AnimatePresence>
        </section>
      </header>
      <nav>
        <motion.ul variants={container} initial="initial">
          {projectList.map((project: Tproject, index: number) => (
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
            key={slideIndex}
            transition={{
              delay: 0.1,
              duration: 0.2,
              ease: easing,
            }}
          >
            {data.description}
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
