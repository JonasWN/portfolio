import React, { useEffect } from "react"
import Img from "gatsby-image"
import { StyledStack } from "./style"
import { useRecoilValue } from "recoil"
import { useStaticQuery, graphql } from "gatsby"
import { projectState, projectIndexState } from "../../recoil/atoms"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { stackVariantStack, stackVariants } from "../../styles/animations"

type Tprops = {
  enter: boolean
}

const alt = "project-cover"
const easing = [0.16, 0.2, 0.3, 1]

const Stack: React.FC<Tprops> = ({ enter }) => {
  const data = useRecoilValue(projectState)
  const slideIndex = useRecoilValue(projectIndexState)
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
  const { containerStack, itemStack } = stackVariantStack
  const { item, container } = stackVariants

  useEffect(() => {
    if (enter) animation.start("enter")
  }, [animation, enter])

  useEffect(() => {
    if (enter) {
      animation.set("initialSlide")
      animation.start("enterSlide")
    }
  }, [data.title])

  return (
    <StyledStack enter={enter} animate={animation}>
      <motion.header variants={container}>
        <motion.h3 variants={item}>{data.date}</motion.h3>
        <motion.h2 variants={item}>{data.title}</motion.h2>
      </motion.header>
      <article>
        <AnimatePresence exitBeforeEnter>
          <motion.figure
            exit={{ scaleX: 0, transformOrigin: "left", opacity: 0 }}
            animate={{ scaleX: 1, transformOrigin: "right", opacity: 1 }}
            initial={{ scaleX: 0, transformOrigin: "right", opacity: 0 }}
            key={slideIndex - 1}
            transition={{ ease: easing, duration: 0.3 }}
          >
            <Img
              fluid={images.edges[slideIndex].node.sharp.fluid}
              loading={"eager"}
              alt={alt}
              fadeIn={false}
            />
          </motion.figure>
        </AnimatePresence>
        <section>
          <AnimatePresence exitBeforeEnter>
            <motion.ul
              key={slideIndex}
              variants={containerStack}
              animate="enter"
              initial="initial"
              exit="exit"
            >
              {data.stack.map((name: string, index: number) => (
                <motion.li key={index} variants={itemStack}>
                  {name}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </section>
      </article>
    </StyledStack>
  )
}

export default Stack
