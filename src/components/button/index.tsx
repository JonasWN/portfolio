import React from "react"
import { Link } from "gatsby"
import { StyledButton } from "./style"

type Iprops = {
  title: string
  link: string
  aria?: string
  download?: boolean
}

const Button: React.FC<Iprops> = ({ link, title, aria, download }) => {
  const internal = /^\/(?!\/)/.test(link)

  if (internal && !download)
    return (
      <StyledButton>
        <Link to={link} aria-label={aria}>
          {title}
        </Link>
      </StyledButton>
    )
  if (download)
    return (
      <StyledButton>
        <a
          href={link}
          target="_blank"
          aria-label={aria}
          rel="noopener"
          download
        >
          {title}
        </a>
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
