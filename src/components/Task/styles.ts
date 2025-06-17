import styled from 'styled-components';

const breakpoints = {
  mobile: "320px",
  mobileLarge: "480px",
  tablet: "768px",
  desktop: "1024px",
  desktopL: "1440px",
}

export const Container = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  font-size: 2.5rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.neonPink};
  text-align: center;

  &::placeholder {
    color: #555;
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 1.5rem;
  }
`;
