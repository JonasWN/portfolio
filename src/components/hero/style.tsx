import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../styles/layout-styles"
const waveMain = keyframes`
  0% {d:path('M567.135 370.876C562.033 328.435 534.945 295 534.945 295C534.945 295 505.302 235.252 494.445 152C472.302 276.036 561.445 373.811 487.819 179.671C414.194 -14.4698 481.064 175.836 481.064 175.836C481.064 202 518.396 176.391 402.427 145.248C138.8 67.6779 134.91 223.477 319.512 179.671C430.394 153.358 423.864 201.507 281.578 113.475C242.191 89.1062 266.565 28.5403 266.565 28.5403L238.252 67.6779C247.706 37.5109 213.294 0 213.294 0C243.756 41.5535 217.645 55.7497 217.645 55.7497L201.889 31.9415C215.395 72.9034 193.486 78.6706 193.486 78.6706L138.8 28.5403C138.8 28.5403 202.639 100.704 150.419 85.7687C103.75 63.2914 124.908 4.28844 124.908 4.28844C113.954 15.8229 109.452 46.8771 109.452 46.8771C91.5949 11.0908 46.3956 31.9415 46.3956 31.9415C46.3956 31.9415 111.16 17.5287 77.5467 90.8758C45.4338 160.526 77.9395 179.227 82.4413 182.776C43.5757 179.819 31.2708 109.133 31.2708 109.133C4.71018 253.314 40.7246 307.141 40.7246 307.141C2.90943 307.289 16.715 210.873 16.715 210.873C16.715 210.873 -7.74481 246.363 4.25999 315.866C19.5661 385.516 106.301 394.241 110.052 394.241C134.062 393.501 145.767 391.431 145.767 391.431C90.3944 367.771 63.3837 269.284 63.3837 269.284C63.3837 269.284 105.701 350.469 134.812 374.868C163.924 399.268 231.151 400.747 231.151 400.747C212.843 385.664 206.391 343.223 202.039 307.289C197.687 271.355 150.419 205.892 150.419 205.892C150.419 205.892 152.519 206.584 196.937 262.038C241.355 317.492 210.743 387.142 249.458 403.557C288.174 420.858 335.593 405.775 335.593 405.775C382.261 386.403 380.01 344.702 374.308 307.289C369.206 269.136 269.266 189.431 269.266 189.431C269.266 189.431 302.22 218.858 364.945 269.284C423.183 320.739 362.483 401.487 374.308 400.747C386.133 400.008 425.312 371.593 471.98 373.811C430.662 337.684 480.945 205.892 480.945 205.892C442.381 297.318 487.819 365.701 487.819 365.701C487.819 365.701 496.772 388.557 525.419 412.282C554.065 436.006 557.587 561 557.587 561C557.587 561 572.087 480.601 572.087 471.876C572.988 463.003 572.988 413.317 567.135 370.876Z')

  }



100%{d:path('M567.135 370.876C562.033 328.435 534.945 295 534.945 295C534.945 295 505.302 235.252 494.445 152C472.302 276.036 561.445 373.811 487.819 179.671C414.194 -14.4698 481.064 175.836 481.064 175.836C481.064 202 518.396 176.391 402.427 145.248C138.8 67.6779 134.91 223.477 319.512 179.671C430.394 153.358 423.864 201.507 281.578 113.475C242.191 89.1062 266.565 28.5403 266.565 28.5403L238.252 67.6779C257.706 37.5109 213.294 0 213.294 0C243.756 41.5535 217.645 55.7497 217.645 55.7497L211.889 31.9415C215.395 72.9034 193.486 78.6706 193.486 78.6706L138.8 28.5403C118.8 28.5403 202.639 100.704 150.419 85.7687C103.75 63.2914 124.908 4.28844 124.908 4.28844C113.954 15.8229 109.452 46.8771 109.452 46.8771C91.5949 11.0908 46.3956 31.9415 46.3956 31.9415C70.3956 31.9415 115.16 17.5287 77.5467 90.8758C45.4338 160.526 77.9395 199.227 82.4413 182.776C23.5757 179.819 31.2708 109.133 31.2708 109.133C4.71018 253.314 40.7246 307.141 40.7246 307.141C2.90943 307.289 1.715 210.873 16.715 210.873C16.715 210.873 -7.74481 246.363 4.25999 315.866C19.5661 385.516 106.301 394.241 110.052 394.241C134.062 393.501 145.767 391.431 145.767 391.431C90.3944 367.771 63.3837 269.284 63.3837 269.284C63.3837 269.284 105.701 350.469 134.812 374.868C163.924 399.268 231.151 400.747 231.151 400.747C212.843 385.664 206.391 343.223 202.039 307.289C197.687 271.355 150.419 205.892 150.419 205.892C150.419 205.892 152.519 206.584 196.937 262.038C241.355 317.492 210.743 387.142 249.458 403.557C288.174 420.858 335.593 405.775 335.593 405.775C382.261 386.403 380.01 344.702 374.308 307.289C369.206 269.136 269.266 189.431 269.266 189.431C269.266 189.431 302.22 218.858 364.945 269.284C423.183 320.739 362.483 401.487 374.308 400.747C386.133 400.008 425.312 371.593 471.98 373.811C430.662 337.684 480.945 205.892 480.945 205.892C442.381 297.318 487.819 365.701 487.819 365.701C487.819 365.701 496.772 388.557 525.419 412.282C554.065 436.006 557.587 561 557.587 561C557.587 561 572.087 480.601 572.087 471.876C572.988 463.003 572.988 413.317 567.135 370.876Z')}

}
`
const wheel = keyframes`
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

export const StyledHero = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;

  @media ${device.mobile} {
    align-items: inherit;
    margin-top: 10%;
    margin-top: 80px;
  }

  .face {
    min-height: 80vh;
    width: 35vw;

    #main {
      animation: ${waveMain} 3s infinite ease-in-out alternate;
    }
    @media ${device.tablet} {
      position: absolute;
      top: 15%;
      left: 53%;
      transform: translate(-50%, -0%);
      width: 80vw;
      min-height: 55vw;
      max-height: 55vh;
    }
    @media ${device.mobile} {
      max-height: 50vh;
      top: 15%;
    }
  }

  #tsparticles {
    @media ${device.mobile} {
      display: none;
    }
  }
`

export const StyledCard = styled.article`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 35vw;
  height: 70vh;
  padding: 3%;
  background: ${props => props.theme.color.background.containerLight};
  box-shadow: ${props => props.theme.shadow.card};
  border-radius: 4px;

  @media ${device.tablet} {
    width: 60vw;
    padding: 5%;
  }

  @media ${device.mobile} {
    width: 85vw;
    height: 75vh;
  }

  h1 {
    position: absolute;
    font-family: Orbitron;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 6rem;
    left: -7.4vw;
    top: 15%;
    font-size: 5rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props =>
      props.theme.color.background.containerDark};
    color: ${props => props.theme.color.font.title};
    text-shadow: ${props => props.theme.shadow.text};
    font-size: min(max(1.5rem, 8vw), 5rem);
    line-height: min(max(4rem, 10vw), 6rem);

    @media ${device.tablet} {
      top: inherit;
      bottom: -22%;
      left: 20px;
      white-space: nowrap;
    }

    @media ${device.mobile} {
      font-weight: 100;
    }
    span {
      margin-left: 7.4vw;

      @media ${device.tablet} {
        margin-left: 0;
      }
    }
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    bottom: 10%;
    left: 3.4vw;
    font-size: 1.3rem;
    font-size: min(max(0.9rem, 2vw), 1.3rem);
    font-family: orbitron;
    font-weight: 100;
    background: #f5f5f580;
    color: #19254cd6;
    text-shadow: ${props => props.theme.shadow.text};
    max-width: 90%;
    letter-spacing: 0.2rem;
    line-height: 2.5rem;

    @media ${device.tablet} {
      line-height: 1.5rem;
    }

    span :first-child {
      color: ${props => props.theme.color.accent.burlywood};
    }
    span :last-child {
      color: #ee0a78;
    }
  }

  .scroll {
    align-self: flex-end;
    right: 10%;
    bottom: 10%;

    @media ${device.mobile} {
      align-self: center;
    }
  }
`

export const StyledScroll = styled(motion.div)`
  width: 25px;
  height: 50px;
  border: 1px solid #333;
  opacity: 0.5;
  border-radius: 60px;
  position: relative;
  &::before {
    content: "";
    width: 1px;
    height: 20px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: scaleY(0);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: ${wheel} 2s infinite;
  }
`
