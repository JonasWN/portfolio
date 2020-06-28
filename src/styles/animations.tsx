import { keyframes } from "styled-components"

export const TextVariants = {
  initialX: {
    opacity: 0,
    translateX: "-20px",
  },
  enterX: {
    opacity: 1,
    translateX: "0px",
  },
  initialY: {
    opacity: 0,
    translateY: "-20px",
  },
  enterY: {
    opacity: 1,
    translateY: "0px",
  },
}

export const stackVariants = {
  container: {
    enter: {
      opacity: 1,
      translateY: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.4,
      },
    },
    initial: { opacity: 0 },
  },
  item: {
    initial: {
      opacity: 0,
      translateY: -40,
    },
    enter: {
      opacity: 1,
      translateY: 0,
    },
  },
}

export const stackVariantsX = {
  container: {
    enter: {
      opacity: 1,
      translateX: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.3,
      },
    },
    initial: { opacity: 0 },
  },
  item: {
    initial: {
      opacity: 0,
      translateX: 20,
    },
    enter: {
      opacity: 1,
      translateX: 0,
    },
  },
}

export const wheel = keyframes`
from {
   transform: scaleY(0) translateY(0);
 }
 50% {
   transform: scaleY(1) translateY(20px);
 }
 to {
   opacity: 0;
   transform: scaleY(0) translateY(60px);
 }
`

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
export const FadeInSlow = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`
