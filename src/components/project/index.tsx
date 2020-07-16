import React, { useEffect, useState } from "react"
import { StyledProject } from "./style"
import { useAnimation, motion, AnimatePresence } from "framer-motion"
import { stackVariants, slideY, easing, slideX } from "../../styles/animations"
import { useRecoilValue, useRecoilState } from "recoil"
import {
  projectListState,
  projectState,
  projectIndexState,
} from "../../recoil/atoms"

type Tprops = {
  enter: boolean
  setCurtain: React.Dispatch<React.SetStateAction<number>>
}

type Tproject = {
  title: string
  description: string
  date: string
  link: string
  stack: string[]
}

const Project: React.FC<Tprops> = ({ enter, setCurtain }) => {
  const projectList = useRecoilValue(projectListState)
  const [slideIndex, setSlideIndex] = useRecoilState(projectIndexState)
  const [swiped, setSwiped] = useState<boolean>(false)
  const [data, setData] = useRecoilState(projectState)
  const { container, item } = stackVariants
  const animation = useAnimation()

  useEffect(() => {
    if (enter) animation.start("enter")
  }, [animation, enter])

  const handleSlide = (index: number) => {
    if (index > projectList.length - 1) {
      setSlideIndex(0)
      setData(projectList[0])
    } else if (index < 0) {
      setSlideIndex(projectList.length - 1)
      setData(projectList[projectList.length - 1])
    } else {
      setSlideIndex(index)
      setData(projectList[index])
    }
    setTimeout(() => {
      if (index > projectList.length - 1) {
        setCurtain(0)
      } else if (index < 0) {
        setCurtain(projectList.length - 1)
      } else {
        setCurtain(index)
      }
    }, 350)
  }

  const handleSwipe = (event: any, info: any) => {
    info.offset.x > 0
      ? handleSlide(slideIndex - 1)
      : handleSlide(slideIndex + 1)

    setSwiped(true)
  }

  return (
    <StyledProject
      enter={enter}
      animate={animation}
      current={slideIndex + 1}
      id="projekter"
      swiped={swiped}
    >
      <header>
        <h2>Projekt</h2>
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
                duration: 0.3,
                ease: easing,
                delay: 0.1,
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
              delay: 0.2,
              duration: 0.3,
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
        onDragStart={handleSwipe}
      ></motion.div>
    </StyledProject>
  )
}

export default Project
