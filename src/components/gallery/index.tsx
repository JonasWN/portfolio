import React, { useEffect, useState } from "react"
import Stack from "../stack"
import Button from "../button"
import Project from "../project"
import { useRecoilValue, useRecoilState } from "recoil"
import {
  projectState,
  projectListState,
  projectIndexState,
} from "../../recoil/atoms"
import { StyledGallery, StyledContainer } from "./style"
import { useInView } from "react-intersection-observer"

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

  const handleSlide = (index: number) => {
    setSlideIndex(index)
    if (index > projectList.length - 1) {
      setSlideIndex(0)
      setData(projectList[slideIndex])
    }
    if (index < 0) {
      setSlideIndex(projectList.length - 1)
      setData(projectList[slideIndex])
    }
    setData(projectList[slideIndex])
  }

  useEffect(() => {
    if (inView) setEnter(true)
  }, [enter, inView])

  return (
    <StyledGallery ref={GalleryRef} enter={enter}>
      <Project enter={enter} handleSlide={handleSlide} />
      <Stack enter={enter} />
      <StyledContainer enter={enter}>
        <Button link={data.link} />
      </StyledContainer>
    </StyledGallery>
  )
}

export default Gallery
