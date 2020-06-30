import React, { useEffect } from "react"
import { StyledStack } from "./style"
import { motion, useAnimation } from "framer-motion"
import { stackVariants, slide } from "../../styles/animations"
//@ts-ignore
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type Iprops = {
  enter: boolean
  handleSlide: (index: number) => void
  index: number
  title: string
  date: string
  cover: string
  stack: string[]
}

const Stack: React.FC<Iprops> = ({
  enter,
  handleSlide,
  index,
  title,
  date,
  cover,
  stack,
}) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "slides" } }
      ) {
        edges {
          node {
            id
            name
            sharp: childImageSharp {
              fluid(maxWidth: 400, maxHeight: 200, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const animation = useAnimation()
  const alt = "project-cover"
  const { container, item } = stackVariants

  useEffect(() => {
    if (enter) animation.start("enter")
  }, [animation, enter])

  const controls = useAnimation()

  useEffect(() => {
    if (enter) {
      controls.set("initial")
      controls.start("enter")
      animation.set("initialSlide")
      animation.start("enterSlide")
    }
  }, [title])

  return (
    <StyledStack enter={enter} animate={animation}>
      <motion.header variants={container}>
        <motion.h3 variants={item}>{date}</motion.h3>
        <motion.h2 variants={item}>{title}</motion.h2>
      </motion.header>
      <article>
        <motion.figure variants={slide} animate={controls}>
          <Img
            fluid={images.edges[index - 1].node.sharp.fluid}
            loading={"eager"}
            alt={alt}
            fadeIn={false}
          />
        </motion.figure>
        <motion.section animate={animation}>
          <motion.ul variants={container}>
            {stack.map((name: string, index: number) => (
              <motion.li key={index} variants={item}>
                {name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </article>
    </StyledStack>
  )
}

export default Stack
