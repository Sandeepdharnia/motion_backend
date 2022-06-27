import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: normal;
    color:black;
    font-family: 'Roboto', sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Space+Mono&display=swap');

button:hover {
    cursor: pointer;
}
`