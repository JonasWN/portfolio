import React from "react"
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
  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
  }
  const docHeight = getDocHeight()
  const ScrollBarHeight = (70 / 100) * docHeight
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
