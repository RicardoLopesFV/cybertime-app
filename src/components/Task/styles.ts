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
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  font-size: 2rem;
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
    font-size: 1.3rem;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 1.2rem;
  }
`;
