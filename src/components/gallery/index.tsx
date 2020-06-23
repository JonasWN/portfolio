import React from "react"
import Project from "./project"
import Stack from "./stack"
import { StyledGallery, StyledContainer } from "./style"
import Button from "../button"

const Gallery = () => {
  return (
    <StyledGallery>
      <Project />
      <Stack />
      <StyledContainer>
        <div>
          <Button />
        </div>
      </StyledContainer>
    </StyledGallery>
  )
}

export default Gallery
