import React from "react"
import { StyledStack } from "./style"
//@ts-ignore
import PortfolioCover from "../../static/portfolio.jpg"
import Button from "../button"

const Stack = () => {
  return (
    <StyledStack>
      <header>
        <h3>17 - 6 - 2020</h3>
        <h2>Portfolio</h2>
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
          <Button />
        </section>
      </article>
    </StyledStack>
  )
}

export default Stack
