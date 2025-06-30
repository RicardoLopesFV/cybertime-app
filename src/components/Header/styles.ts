import styled from "styled-components";

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
  font-size: 1.8rem;
  font-family: 'audiowide', sans-serif;
`
