import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
//@ts-ignore
import { StyledScroll } from "./style"

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
