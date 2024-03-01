import styled, { createGlobalStyle } from 'styled-components';
import BGImage from '../public/images/bg-image.jpg';

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif ;
        
    }

    html{
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
`

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    > p{
        color: #fff;
    }

    .score{
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1{
        font-family: 'Fascinate Inline', sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px, 2px, #0085a3);
        font-size: 70px;
        font-weight: 400px;
        text-align: center;
        margin: 20px;
    }

    .start{
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        max-width: 200px;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 50px;
        }
    }

`