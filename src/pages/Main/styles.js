import styled from "styled-components";

export const Container = styled.div`
    max-width: 70%;
    min-height: 50vh;
    border-radius: 5px;
    padding: 30px;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    
    @media (max-width: 1128px) {
        max-width: 100%;
        padding: 5px;
    }
`;

export const Title = styled.div`
    max-width: 70%;
    margin: 60px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 48px;
    font-weight: bold;
    border-radius: 30px;
    color: #333;

    @media(max-width: 700px) {
        font-size: 24px;
        margin: 15px auto;
    }
`;