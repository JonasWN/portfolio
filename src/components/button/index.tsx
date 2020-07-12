import React from "react"
import { Link } from "gatsby"
import { StyledButton } from "./style"
import { Type } from "tsparticles/dist/Plugins/PolygonMask/Enums"

type Iprops = {
  title: string
  link: string
  aria?: string
  download?: boolean
  submit?: string
  type?: string
}

const Button: React.FC<Iprops> = ({ link, title, aria, download, type }) => {
  const internal = /^\/(?!\/)/.test(link)

  if (type) {
    return <StyledButton>{title}</StyledButton>
  }

  if (internal && !download && !type)
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
