import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { StyledStack } from "./style"
import { useRecoilValue } from "recoil"
import { useStaticQuery, graphql } from "gatsby"
import { curtainEasing } from "../../styles/animations"
import { motion, AnimatePresence } from "framer-motion"
import { projectState, projectIndexState } from "../../recoil/atoms"
import { stackVariantStack, stackVariants } from "../../styles/animations"

type Tprops = {
  enter: boolean
  curtain: number
}

const Stack: React.FC<Tprops> = ({ enter, curtain }) => {
  const data = useRecoilValue(projectState)
  const slideIndex = useRecoilValue(projectIndexState)
  const [delay, setDelay] = useState<boolean>(false)
  const { item, container } = stackVariants
  const { containerStack, itemStack } = stackVariantStack

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

  useEffect(() => {
    if (enter) {
      setTimeout(() => {
        setDelay(true)
      }, 2100)
    }
  }, [enter])

  return (
    <StyledStack enter={enter}>
      <AnimatePresence exitBeforeEnter>
        {enter && (
          <motion.header
            variants={container}
            key={slideIndex}
            animate={!delay ? "enterDelayed" : "enter"}
            exit="exit"
          >
            <motion.h3 variants={item}>{data.date}</motion.h3>
            <motion.h2 variants={item}>{data.title}</motion.h2>
          </motion.header>
        )}
      </AnimatePresence>
      <article>
        <motion.figure>
          <Img
            fluid={images.edges[curtain].node.sharp.fluid}
            loading={"eager"}
            alt="project-cover"
            fadeIn={false}
            imgStyle={{ filter: "contrast(1.2)" }}
          />
          <motion.div
            className="curtain"
            animate={{
              transformOrigin: ["100%", "100%", "0%", "0%"],
              scaleX: [0, 1, 1, 0],
            }}
            key={slideIndex}
            transition={{ duration: 1, ease: curtainEasing }}
          />
        </motion.figure>
        <section>
          <AnimatePresence exitBeforeEnter>
            <motion.ul
              key={slideIndex}
              variants={containerStack}
              animate="enter"
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
