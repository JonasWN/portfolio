import React from "react"
import { StyledCard } from "./style"
import { Scroll } from "./scroll"
import { motion } from "framer-motion"
import { TextVariants } from "../../styles/animations"

const Card = () => {
  return (
    <>
      <StyledCard>
        <section>
          <motion.h1
            variants={TextVariants}
            animate="enterX"
            initial="initialX"
            transition={{ delay: 1.4, ease: "easeOut" }}
          >
            jonas <span>Nielsen</span>
          </motion.h1>
          <motion.div>
            <motion.h2
              variants={TextVariants}
              animate="enterY"
              initial="initialY"
              transition={{ delay: 1.5, ease: "easeOut" }}
            >
              <span>Front End</span> Developer From Copenhagen <br /> Who Likes
              <span> UX</span>
            </motion.h2>
            <Scroll />
          </motion.div>
        </section>
      </StyledCard>
    </>
  )
}

export { Card }
