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
        handleSlide={handleSlide}
        index={slideIndex + 1}
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
      "En NewYorkTimes newsfeed webapplication, som var mit første projekt hvor jeg brugte Typescript. Udfordring var at hente xml data fra NewYorkTimes, for så at konventere det til json",
    date: "30-4-2020",
    cover: "f",
    stack: ["React.JS", "Typescript", "Tailwind CSS"],
  },
  {
    title: "IplayMusic",
    description:
      "IplayMusic er en music player webapplication som henter data fra Spotify´s API. Det blev til en rigtig fin song preview player da jeg ikke har premium. Desuden jeg lærte en masse om at optimere REST-API kalds ",
    date: "13-1-2020",
    cover: "f",
    stack: ["EJS", "Gulp", "SCSS"],
  },
  {
    title: "Blog-Components",
    description:
      "En skole opgave der gik ud på at tænke modulært i form af komponenter. jeg brugte Gatsby.jS, Typescript og derovre Contentful some et Headless-CMS.",
    date: "25-5-2020",
    cover: "f",
    stack: ["Gatsby.JS", "Typescript", "Contentful"],
  },
  {
    title: "Tasks",
    description:
      "Mit første React.JS projekt, som gav mig en bredt indblik i hvordan React.js rent faktisk fungere som et javascript-framework. React-Spring blev også brugt meget i forbindelse med projektet.",
    date: "25-2-2020",
    cover: "f",
    stack: ["React.JS", "React-Spring", "SCSS"],
  },
]

export default Gallery
