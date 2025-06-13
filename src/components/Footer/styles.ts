import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`

export const Footer = styled.footer`
  height: calc(100vh / 20);
  border-top: 1px solid #2A2D3A;
`

export const GithubLink = styled.a`
  text-decoration: none;
  gap: 1rem;
  color: ${({ theme }) => theme.neonGreen};
  transition: all 0.3s ease;

  &:hover {
    text-shadow:
                  0 0 5px ${({ theme }) => theme.neonGreen},
                  0 0 10px ${({ theme }) => theme.neonGreen},
                  0 0 20px ${({ theme }) => theme.neonGreen};
    transform: scale(1.05);
  }
`

export const GithubIcon = styled.span`
  font-size: 1.3rem;
`
