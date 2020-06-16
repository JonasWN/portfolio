import React, { useEffect, useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Lottie from "react-lottie"
//@ts-ignore
import * as animationData from "../../static/animations/scroll.json"
import { StyledScrollBar } from "./style"

const Scroll = () => {
  const { scrollYProgress } = useViewportScroll()
  const top = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <motion.div style={{ opacity: top }}>
      <Lottie
        options={defaultOptions}
        height={100}
        width={40}
        style={{
          position: "absolute",
          bottom: "5%",
          right: "10%",
          opacity: 0.5,
        }}
      />
    </motion.div>
  )
}

const ScrollBar = () => {
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  const ScrollBarHeight = (70 / 100) * height
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

export { Scroll, ScrollBar }
