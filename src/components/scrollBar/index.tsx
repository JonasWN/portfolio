import React, { useState, useEffect } from "react"
import { StyledScrollBar } from "./style"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const ScrollBar = () => {
  const [wh, setWh] = useState<number>(0)

  useEffect(() => {
    const height = (60 / 100) * window.innerHeight
    setWh(height)
  }, [])

  const { scrollYProgress } = useViewportScroll()
  const Height = useTransform(scrollYProgress, [0, 1], [0, wh])

  return (
    <StyledScrollBar height={`${wh}px`}>
      <motion.div
        style={{
          height: Height,
        }}
      />
    </StyledScrollBar>
  )
}

export default ScrollBar
