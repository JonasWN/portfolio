import React, { useEffect } from "react"
import { StyledStack } from "./style"
import { motion, useAnimation } from "framer-motion"
import { stackVariants } from "../../styles/animations"
//@ts-ignore
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type Iprops = {
  enter: boolean
}

const Stack: React.FC<Iprops> = ({ enter }) => {
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
        <motion.h3 variants={item}>17 - 6 - 2020</motion.h3>
        <motion.h2 variants={item}>Portfolio</motion.h2>
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
            <li>React.JS</li>
            <li>Typescript</li>
            <li>Gatsby.JS</li>
            <li>Contentful</li>
          </ul>
        </section>
      </article>
    </StyledStack>
  )
}

export default Stack
