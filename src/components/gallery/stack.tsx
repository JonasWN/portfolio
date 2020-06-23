import React from "react"
import { StyledStack } from "./style"
//@ts-ignore
import PortfolioCover from "../../static/portfolio.jpg"
import { motion } from "framer-motion"

const Stack = () => {
  return (
    <StyledStack>
      <header>
        <motion.h3
          animate={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: -40 }}
          transition={{ delay: 1.9 }}
        >
          17 - 6 - 2020
        </motion.h3>
        <motion.h2
          animate={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: -40 }}
          transition={{ delay: 2 }}
        >
          Portfolio
        </motion.h2>
      </header>
      <article>
        <figure>
          <img src={PortfolioCover} alt="project-cover" />
        </figure>
        <section>
          <h4>Stack</h4>
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
