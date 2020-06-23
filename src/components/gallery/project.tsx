import React from "react"
import { StyledProject } from "./style"

type Iprops = {
  enter: boolean
}

const Project: React.FC<Iprops> = ({ enter }) => {
  return (
    <StyledProject enter={enter}>
      <header>
        <h2>Project</h2>
        <section>
          <div />
          <p>01</p>
        </section>
      </header>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <article>
        <h3>Info</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          veniam dignissimos maiores quam, labore repudiandae!
        </p>
      </article>
    </StyledProject>
  )
}

export default Project
