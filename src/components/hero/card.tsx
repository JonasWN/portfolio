import React from "react"
import { StyledCard } from "./style"

const Card = () => {
  return (
    <>
      <StyledCard>
        <h1>
          Jonas <span>Nielsen</span>
        </h1>
        <p>
          <span>Front End</span> Developer From Copenhagen
        </p>
      </StyledCard>
    </>
  )
}

export { Card }
