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

  main {
    height: calc(100vh - 13%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

`
