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
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

> p {
    color: #fff;
}

.score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
}

h1 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: linear-gradient(180deg, #87f1ff, #fff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(4px 4px #0085a3);
    font-size: 100px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
}
`