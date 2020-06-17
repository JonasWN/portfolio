import React from "react"
import { StyledScrollBar } from "./style"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const ScrollBar = () => {
  const ScrollBarHeight = 600
  const { scrollYProgress } = useViewportScroll()
  const Height = useTransform(scrollYProgress, [0, 1], [0, ScrollBarHeight])

  return (
    <StyledScrollBar height={`${ScrollBarHeight}px`}>
      <motion.div
        style={{
          height: Height,
        }}
      />
    </StyledScrollBar>
  )
}

export default ScrollBar
