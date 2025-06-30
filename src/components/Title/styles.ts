import styled from "styled-components";

const breakpoints = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1024px",
  desktopL: "1440px",
}

export const Container = styled.div`
  max-width: ${breakpoints.desktop};
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.h2`
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-align: center;
  color: ${({ theme }) => theme.neonGreen};
  font-size: 1.6rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
  }

  `
export const SubTitle = styled.h3`
  letter-spacing: 1px;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.4rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    padding: 0 2.3rem;
  }
`
