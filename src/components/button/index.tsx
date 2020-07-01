import React from "react"
import { StyledButton } from "./style"
import { Link } from "gatsby"

type Iprops = {
  link: string
}

const Button: React.FC<Iprops> = ({ link }) => {
  return (
    <StyledButton>
      <a href={link} target="_blank" aria-label="Personal Site" rel="noopener">
        Explore
      </a>
    </StyledButton>
  )
}

export default Button
