import React from "react"
import { StyledButton } from "./style"
import { Link } from "gatsby"

const Button = () => {
  return (
    <StyledButton>
      <Link to="/"> Explore</Link>
    </StyledButton>
  )
}

export default Button
