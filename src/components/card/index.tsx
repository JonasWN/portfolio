import React from "react"
import { StyledCard } from "./style"
//@ts-ignore
import Tech from "../../static/images/cards/tech.svg"
//@ts-ignore
import Design from "../../static/images/cards/design.svg"
//@ts-ignore
import Udvikling from "../../static/images/cards/udvikling.svg"

type Tprops = {
  title: string
  description: string
}

const Card: React.FC<Tprops> = ({ title, description }) => {
  return (
    <StyledCard>
      <h4>{title}</h4>
      {title === "Teknologi" && <Tech />}
      {title === "Design" && <Design />}
      {title === "Udvikling" && <Udvikling />}
      <p>{description}</p>
    </StyledCard>
  )
}

export default Card
