import styled, { createGlobalStyle } from 'styled-components';
import Background from './images/background.jpg';

export const Style = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${Background});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }
`