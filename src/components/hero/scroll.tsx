import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Lottie from "react-lottie"
//@ts-ignore
import * as animationData from "../../static/animations/scroll.json"

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

export { Scroll }
