import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
//@ts-ignore
import * as animationData from "../../static/animations/scroll.json"
import { StyledScroll } from "./style"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Scroll = () => {
  const { scrollYProgress } = useViewportScroll()
  const top = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <motion.div style={{ opacity: top }} className="scroll">
      <StyledScroll />
    </motion.div>
  )
}

export { Scroll }
