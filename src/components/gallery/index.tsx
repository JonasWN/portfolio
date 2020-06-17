import React from "react"
import Project from "./project"
import Stack from "./stack"
import { StyledGallery } from "./style"

const Gallery = () => {
  return (
    <StyledGallery>
      <Project />
      <Stack />
    </StyledGallery>
  )
}

export default Gallery
