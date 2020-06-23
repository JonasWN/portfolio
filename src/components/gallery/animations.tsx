import { keyframes } from "styled-components"

export const ScaleRight = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: 0%;
  }

  50% {
    transform-origin: 0%;
    transform: scale(1);
  }

  51% {
    transform-origin: 100%;
    transform: scaleX(1);
  }

  to {
    transform-origin: 100%;
    transform: scaleX(0);
  }
`
export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }

  to {
    opacity: 1;
  }
`
