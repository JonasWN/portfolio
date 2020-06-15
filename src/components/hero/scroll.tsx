import React, { useState, useEffect } from "react"
import Lottie from "react-lottie"
//@ts-ignore
import * as animationData from "../../static/animations/scroll.json"

const Scroll = () => {
  const [scroll, setScroll] = useState(true)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance()
      })
    })
  }

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
  }

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset
    const winHeight = window.innerHeight
    const docHeight = getDocHeight()

    const totalDocScrollLength = docHeight - winHeight
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100)

    setScroll(scrollPosition != 0 ? false : true)
  }
  useEffect(() => {
    listenToScrollEvent()
  })

  if (scroll) {
    return (
      <Lottie
        options={defaultOptions}
        height={100}
        width={40}
        style={{
          position: "absolute",
          bottom: "5%",
          right: "10%",
          opacity: 0.5,
        }}
      />
    )
  }

  return null
}

export { Scroll }
