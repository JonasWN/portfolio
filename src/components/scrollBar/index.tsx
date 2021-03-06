import React, { useState, useEffect } from "react"
import { StyledScrollBar } from "./style"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const ScrollBar = () => {
  const [wh, setWh] = useState<number>(0)
  const [pageWidth, setPageWidth] = useState<number>(0)
  const phoneWidth = 420

  useEffect(() => {
    const height = (60 / 100) * window.innerHeight
    setWh(height)
    setPageWidth(window.innerWidth)
  }, [])

  const { scrollYProgress } = useViewportScroll()
  const Height = useTransform(scrollYProgress, [0, 1], [0, wh])

  return (
    <>
      {pageWidth > phoneWidth && (
        <StyledScrollBar
          height={`${wh}px`}
          animate={{ height: wh, opacity: 1 }}
          initial={{ height: "0%", opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            style={{
              height: Height,
            }}
          />
        </StyledScrollBar>
      )}
    </>
  )
}

export default ScrollBar
