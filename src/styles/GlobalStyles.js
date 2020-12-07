import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  button, input, textarea {
    font: 400 18px Roboto, sans-serif;

    &:focus {
      outline: none;
    }

  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 50px;
    color: #333333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 16px;

    
  }
`;
