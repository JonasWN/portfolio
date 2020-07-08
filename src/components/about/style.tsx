import styled from "styled-components"

export const StyledAbout = styled.section`
  margin: 50vh 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: #072142;
    font-family: orbitron;
    font-weight: 100;
    font-size: 1.9rem;
  }

  article {
    width: 40vw;
    align-self: center;

    h3 {
      font-family: orbitron;
      color: #072142;
      font-weight: 600;
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
      margin-bottom: 20px;
    }
    p {
      font-family: orbitron;
      color: #254063;
      font-size: 14px;
      font-weight: 100;
      line-height: 2;
      letter-spacing: 0.1rem;
    }
  }
  ul {
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 300px));
    display: grid;
    place-content: center;
    place-items: center;
    grid-gap: 20vh 80px;
  }
`
