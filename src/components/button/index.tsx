import React from "react"
import { Link } from "gatsby"
import { StyledButton } from "./style"

type Iprops = {
  title: string
  link: string
  aria: string
}

const Button: React.FC<Iprops> = ({ link, title, aria }) => {
  const internal = /^\/(?!\/)/.test(link)

  if (internal)
    return (
      <StyledButton>
        <Link to={link} aria-label={aria}>
          {title}
        </Link>
      </StyledButton>
    )
  return (
    <StyledButton>
      <a href={link} target="_blank" aria-label={aria} rel="noopener">
        {title}
      </a>
    </StyledButton>
  )
}

export default Button
