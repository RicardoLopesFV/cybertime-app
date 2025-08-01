import {  createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rajdhani', sans-serif;
  }

  body {
    height: 100vh;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
  }

  #root {
    height: 100%;
  }

  h1, ul, button, span {
    user-select: none;
  }

  main {
    height: calc(100vh - 13%);
    margin-bottom: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }

  button {
    border: none;
    background: none;
  }

`
