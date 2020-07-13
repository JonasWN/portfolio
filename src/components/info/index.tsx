import React, { useState, useEffect } from "react"
import { StyledInfo } from "./style"
import Button from "../button"
import { easing } from "../../styles/animations"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const IO = {
  triggerOnce: true,
  rootMargin: "-20px",
  threshold: 1,
}

const Info = () => {
  const [enter, setEnter] = useState<boolean>(false)
  const [InfoRef, inView] = useInView(IO)

  useEffect(() => {
    if (inView) setEnter(true)
  }, [enter, inView])

  return (
    <StyledInfo ref={InfoRef}>
      {enter && (
        <>
          <motion.h3
            initial={{ opacity: 0, translateX: "-40px" }}
            animate={{ opacity: 1, translateX: "0px" }}
            transition={{ duration: 0.6, ease: easing, delay: 0.3 }}
          >
            Kontakt
          </motion.h3>
          <article>
            <motion.h4
              initial={{ opacity: 0, translateX: "-40px" }}
              animate={{ opacity: 1, translateX: "0px" }}
              transition={{ duration: 0.6, ease: easing, delay: 0.4 }}
            >
              Hvis du synes jeg ville være et godt match for jeres team eller
              har nogle sporgsmål må du endelige bare kontakte mig.
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, translateY: "80px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              transition={{ duration: 0.6, ease: easing, delay: 0.6 }}
            >
              <Button link="/kontakt" title="Kontakt" aria="Kontakt side" />
              <Button link="/cv" title="CV" aria="CV side" />
            </motion.div>
          </article>
        </>
      )}
    </StyledInfo>
  )
}

export default Info
