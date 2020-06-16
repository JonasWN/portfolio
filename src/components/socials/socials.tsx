import React from "react"
import styled from "styled-components"
import { Github, Facebook, Linkedin } from "@styled-icons/boxicons-logos"

const socials = [Github, Linkedin, Facebook]

const Socials = () => {
  return (
    <ul>
      {socials.map((link: any, index: number) => {
        const SocialLink = link
        return (
          <li key={index}>
            <a href="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <SocialLink />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export { Socials }
