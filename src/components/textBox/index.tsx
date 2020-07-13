import React from "react"
import { StyledTextBox } from "./style"
import { motion } from "framer-motion"
import { easing } from "../../styles/animations"

type Tprops = {
  enter: boolean
}

const TextBox: React.FC<Tprops> = ({ enter }) => {
  return (
    <StyledTextBox>
      {enter && (
        <>
          <motion.h3
            initial={{ opacity: 0, translateX: "80px" }}
            animate={{ opacity: 1, translateX: "0px" }}
            transition={{ duration: 0.6, ease: easing }}
          >
            Om Mig
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, translateX: "80px" }}
            animate={{ opacity: 1, translateX: "0px" }}
            transition={{ duration: 0.6, ease: easing }}
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
