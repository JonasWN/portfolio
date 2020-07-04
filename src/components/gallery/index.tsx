import React, { useEffect, useState } from "react"
import Stack from "../stack"
import Button from "../button"
import Project from "../project"
import { useRecoilValue, useRecoilState } from "recoil"
import { StyledGallery, StyledContainer } from "./style"
import { useInView } from "react-intersection-observer"
import {
  projectState,
  projectListState,
  projectIndexState,
} from "../../recoil/atoms"

const IO = {
  triggerOnce: true,
  rootMargin: "150px",
  threshold: 1,
}

const Gallery = () => {
  const projectList = useRecoilValue(projectListState)
  const [data, setData] = useRecoilState(projectState)
  const [slideIndex, setSlideIndex] = useRecoilState(projectIndexState)
  const [enter, setEnter] = useState<boolean>(false)
  const [GalleryRef, inView] = useInView(IO)

  useEffect(() => {
    if (inView) setEnter(true)
  }, [enter, inView])

  return (
    <StyledGallery ref={GalleryRef} enter={enter}>
      <Project enter={enter} />
      <Stack enter={enter} />
      <StyledContainer enter={enter}>
        <Button link={data.link} />
      </StyledContainer>
    </StyledGallery>
  )
}

export default Gallery
