import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    *{
        margin:0;
        font-family: Open Sans, sans-serif;
        font-size: 22px;
        font-weight: 500;
        font-style: normal;
 ${"" /* border:1px solid red;    */}
`;
