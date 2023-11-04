import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    *{
        font-family: Open Sans, sans-serif;
        font-size: 22px;
        font-weight: 500;
        font-style: normal;
    }
`;
