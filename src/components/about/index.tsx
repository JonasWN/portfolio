import React, { useState, useEffect } from "react"
import TextBox from "../textBox"
import Card from "../card"
import { StyledAbout } from "./style"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { easing } from "../../styles/animations"

type Tcard = {
  title: string
  description: string
}

const IO = {
  triggerOnce: true,
  rootMargin: "-450px",
  threshold: 0,
}

const About = () => {
  const [enter, setEnter] = useState<boolean>(false)
  const [AboutRef, inView] = useInView(IO)

  useEffect(() => {
    if (inView) setEnter(true)
  }, [enter, inView])

  return (
    <StyledAbout ref={AboutRef}>
      {enter && (
        <motion.h2
          initial={{ opacity: 0, translateX: "-80px" }}
          animate={{ opacity: 1, translateX: "0px" }}
          transition={{ duration: 0.6, ease: easing }}
        >
          Hvem er jeg
        </motion.h2>
      )}
      <TextBox enter={enter} />
      <ul>
        {cardTemplate.map((card: Tcard) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </ul>
    </StyledAbout>
  )
}

const cardTemplate = [
  {
    title: "Teknologi",
    description:
      "jeg har altid været facineret af teknologi og hvor hurtigt det kan udvikle sig og være med til at skabe muligheder i verden.",
  },
  {
    title: "Design",
    description:
      "At fremstille information på en skematisk og kreativ måde, er en passion jeg brænder for at vise.",
  },
  {
    title: "Udvikling",
    description:
      "Udvikling kommer i alle former. at kunne gå fra en ide til virkelighed, er en process jeg elsker.",
  },
]

export default About
