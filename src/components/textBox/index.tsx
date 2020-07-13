import React, { useState, useEffect } from "react"
import { StyledTextBox } from "./style"
import { motion } from "framer-motion"
import { easing } from "../../styles/animations"
import { useInView } from "react-intersection-observer"

const IO = {
  triggerOnce: true,
  rootMargin: "-0px",
  threshold: 1,
}

const TextBox: React.FC = () => {
  const [enter, setEnter] = useState<boolean>(false)
  const [TextRef, inView] = useInView(IO)

  useEffect(() => {
    if (inView) setEnter(true)
  }, [enter, inView])

  return (
    <StyledTextBox ref={TextRef}>
      {enter && (
        <>
          <motion.h3
            initial={{ opacity: 0, translateY: "80px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            transition={{ duration: 0.6, ease: easing, delay: 0.3 }}
          >
            Om Mig
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, translateY: "80px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            transition={{ duration: 0.6, ease: easing, delay: 0.6 }}
          >
            Jeg er en nyuddannet Frontend udvikler der har stort fokus på alt
            der har med brugeroplevelse at gore. Jeg elsker at udforske nye
            ideer og finder mig selv dykke ned i kaninhullet alt for tit ( men
            husker dog at komme op igen! ) Tilfredsstillelsen kommer ud fra at
            finde losningere der gor en forskel og det at være med til at skabe
            noget unikt.
          </motion.p>
        </>
      )}
    </StyledTextBox>
  )
}

export default TextBox
