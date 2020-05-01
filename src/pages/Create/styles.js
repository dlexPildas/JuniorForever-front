import styled from 'styled-components';

export const Container = styled.div`
    font-size: 24px;
    display: flex;
    flex-direction: column;
    max-width: 50%;
    min-height: 300px;
    margin: 80px auto;
    padding: 20px;

    @media(max-width: 1300px){
        max-width: 70%;
    }

    @media(max-width: 1128px){
        margin: 40px auto;
        max-width: 80%;
        padding: 5px;
    }    
`;

export const Title = styled.h2`
    margin-top: 75px;
    background: #7159c1;
    color: #fff;
    letter-spacing: 1.5px;
    padding: 20px 10px;
    border-radius: 30px;
    display: flex;
    justify-content: center;

`;