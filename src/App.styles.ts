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
    padding-bottom: 10px;
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

.start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
}

.easy {
    background: linear-gradient(180deg, #56ffa4, #59bc86);
    border: 2px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 0px 20px;
    padding: 0 40px;
    color: #fff;
    font-weight: 500;
}

.med {
    background: linear-gradient(180deg, #ffa84c, #ff7b0d);
    border: 2px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 0px 20px;
    padding: 0 40px;
}

.hard {
    background: linear-gradient(180deg, #ff3019, #cf0404);
    border: 2px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 0;
    padding: 0 40px;
}
`

export const DifficultyButtons = styled.div`
    transition: all 0.3s ease;
    
    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 20px;
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px, 1px, 0px rgba(0, 0, 0, 0.25)
    }
`;