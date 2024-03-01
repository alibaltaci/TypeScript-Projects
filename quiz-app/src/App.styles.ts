import { createGlobalStyle } from 'styled-components';
import BGImage from '../public/images/background-image.jpg';

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
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }


`