import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    width: 100%;

    form {
        margin-top: 10px;
        margin-bottom: 40px;
        width: 400px; 
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label {
        font-weight: bold;
    }

    input {
        margin-top: 5px;
        width: 100%;
        border: 2px solid #acacac;
        font-size: 18px;
        padding: 16px;
        border-radius: 10px;
        color: #FFF;
        font-weight: bold;
        background: #acacac;

        &::placeholder {
            color: #eee;
        }
    }
`;

export const Action = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    button {
        border: 0;
        padding: 15px 30px;
        border-radius: 10px;
        font-weight: bold;
        letter-spacing: 2px;
        background: #7159c1;
        color: #fff;
    }

    div {
        margin-left: 10px;
        display: flex;
        align-items: center;
        font-weight: bold;
        
        cursor: pointer;

        span {
            font-size: 18px;
            margin-left: 5px;
        }

        &:hover {
            color: #7159c1;
        }
    }
`;