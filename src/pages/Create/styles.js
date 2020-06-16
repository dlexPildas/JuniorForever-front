import styled from 'styled-components';

export const HeaderPost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;

    label {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    input {
        height: 38px;
        border-radius: 10px;
        border: 0;
        background: #eee;
        padding: 10px;
        font-weight: bold;
        color: #333;
        font-size: 18px;
    }

    label + label{
        margin-left: 5px;
    }
`;

export const Container = styled.div`
    font-size: 24px;
    display: flex;
    flex-direction: column;
    max-width: 50%;
    min-height: 70vh;
    margin: 0px auto;
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

export const Title = styled.h3`
    margin-top: 75px;
    background: #7159c1;
    color: #fff;
    letter-spacing: 1.5px;
    padding: 20px 10px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
`;