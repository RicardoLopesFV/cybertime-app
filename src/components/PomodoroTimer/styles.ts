import styled from "styled-components";

const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
  desktopL: "1440px",
}

interface ButtonProps {
  $variant: "start" | "reset"
}

export const Container = styled.div`
  max-width: 512px;
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #2A2D3A;
`

export const Options = styled.ul`
  width: 100%;
  margin-bottom: 2rem;
  display:flex;
  align-items: center;
  justify-content: space-between;

  li {
    font-size: 1.2rem;
    list-style: none;
    color: ${({ theme }) => theme.neonGreen};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      text-shadow:
                  0 0 5px ${({ theme }) => theme.neonGreen},
                  0 0 10px ${({ theme }) => theme.neonGreen},
                  0 0 20px ${({ theme }) => theme.neonGreen};
      transform: scale(1.05);
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    li {
      font-size: 0.9rem;
    }
  }
`

export const Timer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme.neonPink};
  
  span {
    font-size: 5rem;
    font-family: 'Orbitron', sans-serif;
    color: ${({ theme }) => theme.neonPink};
    text-shadow:
      0 0 8px rgba(255, 20, 147, 0.6),
      0 0 15px rgba(255, 20, 147, 0.4),
      0 0 25px rgba(255, 20, 147, 0.2);
    animation: cyberpunk-glow 4s ease-in-out infinite alternate;
    filter: drop-shadow(0 0 10px rgba(255, 20, 147, 0.3));
  }

  @keyframes cyberpunk-glow {
    from {
      text-shadow:
        0 0 5px rgba(255, 20, 147, 0.8),
        0 0 10px rgba(255, 20, 147, 0.5),
        0 0 20px rgba(255, 20, 147, 0.3);
      filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.3));
    }
    to {
      text-shadow:
        0 0 8px rgba(255, 20, 147, 0.9),
        0 0 15px rgba(255, 20, 147, 0.6),
        0 0 25px rgba(255, 20, 147, 0.4),
        0 0 35px rgba(255, 20, 147, 0.2);
      filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.4));
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    span {
      font-size: 4rem;
    }
  }
` 

export const Buttons = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Button = styled.button<ButtonProps>`
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 1px;
  padding: 1rem 2.5rem;

  color: ${
    ({ theme, $variant }) => 
    $variant === "start" ?theme.neonGreen : theme.neonPink
  };

  border: 3px solid ${
    ({ theme, $variant }) => 
    $variant === "start" ?theme.neonGreen : theme.neonPink
  };

  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
  
  &:hover {
    background: ${({ theme, $variant }) => 
      $variant === "start" ? theme.neonGreen : theme.neonPink
    };
    color: ${({ theme }) => theme.background};

    transform: scale(1.05);
    animation: pulse 2s infinite;
  }
`

export const Message = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.1rem;
  letter-spacing: 1px;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }
`
