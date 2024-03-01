import styled,{ keyframes }from 'styled-components'

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        font-size: 80px;
        animation: ${pulseAnimation} 2s infinite;
        transition: transform 1s ease-in-out;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-clip: text;
        background-size: 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px, 2px, #0085a3);

    }

    p{
        font-size: 20px;
        margin: 0;
    }

    .icon{
      font-size: 80px;
      animation: ${rotateAnimation} 1s ease-in-out infinite;
    }

`