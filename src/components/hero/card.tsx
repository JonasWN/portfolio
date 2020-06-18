import React from "react"
import { StyledCard } from "./style"
import { Scroll } from "./scroll"

const Card = () => {
  return (
    <>
      <StyledCard>
        <h1>
          Jonas <span>Nielsen</span>
        </h1>
        <div>
          <p>
            <span>Front End</span> Developer From Copenhagen
          </p>
          <Scroll />
        </div>
      </StyledCard>
    </>
  )
}

export { Card }
