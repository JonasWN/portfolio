import React from "react"

type Tprops = {
  title: string
  description: string
}

const Card: React.FC<Tprops> = ({ title, description }) => {
  return (
    <article>
      <h4>{title}</h4>
      <svg></svg>
      <p>{description}</p>
    </article>
  )
}

export default Card
