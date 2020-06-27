import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
//@ts-ignore
import { StyledScroll } from "./style"

const Scroll = () => {
  const { scrollYProgress } = useViewportScroll()
  const top = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <motion.div style={{ opacity: top }} className="scroll">
      <StyledScroll
        animate={{ opacity: 0.5 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.9, duration: 0.6 }}
      />
    </motion.div>
  )
}

export { Scroll }
