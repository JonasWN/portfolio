import React, { useEffect, useState } from "react"
import { StyledGallery, StyledContainer } from "./style"
import { useInView } from "react-intersection-observer"
import Project from "./project"
import Stack from "./stack"
import Button from "../button"

let slideIndex: number = 0

const Gallery = () => {
  const [data, setData] = useState(projects[slideIndex])
  const [enter, setEnter] = useState<boolean>(false)
  const [GalleryRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "150px",
    threshold: 1,
  })

  const handleSlide = (index: number) => {
    slideIndex = index
    setData(projects[slideIndex])
  }

  useEffect(() => {
    if (inView) setEnter(true)
  }, [enter, inView])

  return (
    <StyledGallery ref={GalleryRef} enter={enter}>
      <Project
        enter={enter}
        handleSlide={handleSlide}
        description={data.description}
        projects={projects}
        index={slideIndex + 1}
      />
      <Stack
        enter={enter}
        title={data.title}
        date={data.date}
        cover={data.cover}
        stack={data.stack}
      />
      <StyledContainer enter={enter}>
        <Button />
      </StyledContainer>
    </StyledGallery>
  )
}

const projects = [
  {
    title: "Newsfeed",
    description:
      "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aperiam.",
    date: "30-4-2020",
    cover: "f",
    stack: ["React.JS", "Typescript", "Tailwind CSS"],
  },
  {
    title: "IplayMusic",
    description:
      "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aperiam.",
    date: "13-1-2020",
    cover: "f",
    stack: ["EJS", "Gulp", "SCSS"],
  },
  {
    title: "Blog-Components",
    description:
      "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aperiam.",
    date: "25-5-2020",
    cover: "f",
    stack: ["Gatsby.JS", "Typescript", "Contentful"],
  },
  {
    title: "Tasks",
    description:
      "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aperiam.",
    date: "25-2-2020",
    cover: "f",
    stack: ["React.JS", "React-Spring"],
  },
]

export default Gallery
