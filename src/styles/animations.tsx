import { keyframes } from "styled-components"

export const easing = [0.16, 0.2, 0.3, 1]

export const phoneNav = {
  container: {
    enter: {
      opacity: 1,
      translateY: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.7,
      },
    },
    enterDelayed: {
      opacity: 1,
      translateY: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.4,
      },
    },
    exit: {
      transition: {
        opacty: 0,
        staggerChildren: 0.2,
      },
    },
    initial: { opacity: 0 },
  },
  item: {
    initial: {
      opacity: 0,
      translateY: -20,
    },
    enter: {
      opacity: 1,
      translateY: 0,
      transition: {
        ease: easing,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      translateY: -20,
      transition: {
        ease: easing,
        duration: 0.4,
      },
    },
  },
}

export const stackVariantStack = {
  containerStack: {
    enter: {
      opacity: 1,
      translateX: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    enterDelayed: {
      opacity: 1,
      translateX: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.4,
      },
    },
    exit: {
      transition: {
        opacty: 0,
        staggerChildren: 0.1,
      },
    },
    initial: { opacity: 0 },
  },
  itemStack: {
    initial: {
      opacity: 0,
      translateX: 40,
    },
    enter: {
      opacity: 1,
      translateX: 0,
      transition: {
        ease: easing,
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      translateX: -20,
      transition: {
        ease: easing,
        duration: 0.2,
      },
    },
  },
}

export const slide = {
  initial: {
    translateX: 50,
    opacity: 0,
  },
  enter: {
    translateX: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export const slideY = {
  initial: {
    translateY: -10,
    opacity: 0,
  },
  enter: {
    translateY: 0,
    opacity: 1,
  },
  exit: {
    translateY: 10,
    opacity: 0,
  },
}

export const slideX = {
  initial: {
    translateX: -30,
    opacity: 0,
  },
  enter: {
    translateX: 0,
    opacity: 1,
  },
  exit: {
    translateX: 10,
    opacity: 0,
  },
}

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
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.4,
      },
    },
    initial: { opacity: 0 },
    enterSlide: {
      opacity: 1,
      translateX: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
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
    exit: {
      opacity: 0,
      translateY: 40,
    },
    initialSlide: {
      opacity: 0,
      translateX: 20,
    },
    enterSlide: {
      opacity: 1,
      translateX: 0,
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
    exit: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
    exit: {
      opacity: 0,
      translateX: -20,
      transition: {
        ease: easing,
        duration: 0.4,
      },
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
export const FillLeft = keyframes`
  from {
    transform: scale(0);
    transform-origin: right;
  }

  to {
    transform: scale(1);
    transform-origin: right;
  }
`

export const FillRight = keyframes`
  from {
    transform: scale(0);
    transform-origin: left;
  }

  to {
    transform: scale(1);
    transform-origin: left;
  }
`
export const FillDown = keyframes`
  from {
    transform: scale(0);
    transform-origin: top;
  }

  to {
    transform: scale(1);
    transform-origin: top;
  }
`
export const FillUp = keyframes`
  from {
    transform: scale(0);
    transform-origin: bottom;
  }

  to {
    transform: scale(1);
    transform-origin: bottom;
  }
`

export const TextAppearY = keyframes`
  from {
    opacity: 0,
    transform: translateY(-20px)
  }

  to {
    opacity: 1,
    transform: translateY(0px)
  }
`
