import React, { useEffect } from "react"
import { StyledStack } from "./style"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { stackVariants } from "../../styles/animations"
//@ts-ignore
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type Iprops = {
  enter: boolean
  title: string
  date: string
  cover: string
  stack: string[]
}

const Stack: React.FC<Iprops> = ({ enter, title, date, cover, stack }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "portfolio.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
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

  return (
    <StyledStack enter={enter} animate={animation}>
      <motion.header variants={container}>
        <motion.h3 variants={item}>{date}</motion.h3>
        <motion.h2 variants={item}>{title}</motion.h2>
      </motion.header>
      <article>
        <Img
          fluid={image.sharp.fluid}
          loading={"eager"}
          alt={alt}
          Tag={"figure"}
          fadeIn={false}
        />
        <section>
          <ul>
            {stack.map((name: string, index: number) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </section>
      </article>
    </StyledStack>
  )
}

export default Stack
