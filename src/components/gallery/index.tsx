import React, { useEffect, useState } from "react"
import { StyledGallery, StyledContainer } from "./style"
import { useInView } from "react-intersection-observer"
import Project from "./project"
import Stack from "./stack"
import Button from "../button"

const Gallery = () => {
  const [enter, setEnter] = useState<boolean>(false)
  const [GalleryRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "150px",
    threshold: 1,
  })

  useEffect(() => {
    if (inView) setEnter(true)
  }, [enter, inView])

  return (
    <StyledGallery ref={GalleryRef} enter={enter}>
      <Project enter={enter} />
      <Stack enter={enter} />
      <StyledContainer enter={enter}>
        <Button />
      </StyledContainer>
    </StyledGallery>
  )
}

export default Gallery
