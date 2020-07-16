import React, { useEffect, useState } from "react"
import Stack from "../stack"
import Button from "../button"
import Project from "../project"
import { useRecoilValue } from "recoil"
import { StyledGallery, StyledContainer } from "./style"
import { useInView } from "react-intersection-observer"
import { projectState } from "../../recoil/atoms"

const IO = {
  triggerOnce: true,
  rootMargin: "150px",
  threshold: 1,
}

const Gallery = () => {
  const data = useRecoilValue(projectState)
  const [curtain, setCurtain] = useState<number>(0)
  const [enter, setEnter] = useState<boolean>(false)
  const [GalleryRef, inView] = useInView(IO)

  useEffect(() => {
    if (inView) setEnter(true)
  }, [enter, inView])

  return (
    <StyledGallery ref={GalleryRef} enter={enter}>
      <Project enter={enter} setCurtain={setCurtain} />
      <Stack enter={enter} curtain={curtain} />
      <StyledContainer enter={enter}>
        <Button link={data.link} title="Explore" aria={`${data.title} site`} />
      </StyledContainer>
    </StyledGallery>
  )
}

export default Gallery
