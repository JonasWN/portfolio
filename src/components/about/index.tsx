import React from "react"
import TextBox from "../textBox"
import Card from "../card"

type Tcard = {
  title: string
  description: string
}

const About = () => {
  return (
    <section>
      <h2>Hvem jeg er</h2>
      <TextBox />
      {cardTemplate.map((card: Tcard) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  )
}

const cardTemplate = [
  {
    title: "Teknologi",
    description:
      "jeg har altid været  facineret af teknologien  og hvor hurtigt det kan udvikle sig og være med til at skabe  muligheder i verden.",
  },
  {
    title: "Design",
    description:
      "At fremstille information på en skematisk og kreativ måde, er en passion jeg brænder for at vise.",
  },
  {
    title: "Udvikling",
    description:
      "Udvikling kommer i alle former. For at kunne gå fra en ide til virkelighed, er en process jeg elsker.",
  },
]

export default About
