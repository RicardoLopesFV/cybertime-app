import styled from "styled-components";

const breakpoints = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1024px",
  desktopL: "1440px",
}

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid #2A2D3A;
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
`

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.neonPink};
  font-size: 1.6rem;
  font-family: 'audiowide', sans-serif;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`
