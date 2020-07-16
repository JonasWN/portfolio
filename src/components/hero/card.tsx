import React from "react"
import { StyledCard } from "./style"
import { Scroll } from "./scroll"
import { motion } from "framer-motion"
import { TextVariants } from "../../styles/animations"

const Card = () => {
  return (
    <>
      <StyledCard>
        <span></span>
        <span></span>
        <section>
          <motion.h1
            variants={TextVariants}
            animate="enterX"
            initial="initialX"
            transition={{ delay: 0.4, ease: "easeOut", duration: 0.6 }}
          >
            jonas <span>Nielsen</span>
          </motion.h1>
          <motion.div>
            <motion.h2
              variants={TextVariants}
              animate="enterY"
              initial="initialY"
              transition={{ delay: 0.5, ease: "easeOut", duration: 0.6 }}
            >
              <span>Front End</span> Udvikler fra Kobenhavn <br /> Som er fan af
              <span> UX</span>
            </motion.h2>
            <Scroll />
          </motion.div>
        </section>
        <span></span>
        <span></span>
      </StyledCard>
    </>
  )
}

export { Card }
