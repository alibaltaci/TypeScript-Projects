import styled from 'styled-components'

type ResultProps = {
    status: boolean;
}

export const ResultWrapper = styled.div<ResultProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border-radius: 10px;
    background: ${({status}) => 
            status
            ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : 'linear-gradient(90deg, #ff5656, #c16868)'
        };;
    
    
    h3{
        margin-top: 1rem;
    }

    p{
        margin: 0 0 1rem 0;
    }
  
`