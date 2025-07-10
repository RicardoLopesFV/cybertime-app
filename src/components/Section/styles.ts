import styled from "styled-components";

const breakpoints = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1024px",
  desktopL: "1440px",
}

export const Section = styled.section`
  background-color: #0C0C14;
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Article = styled.article`
  margin: 0 auto;
  margin-bottom: 4rem;
  max-width: 720px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`

export const Title = styled.h3`
  margin-bottom: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.neonPink};
  font-size: 1.8rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.6rem;
  }
`

export const Text = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.textPrimary};

  ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      list-style: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`
