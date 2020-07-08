import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 15px;
    background: #1c1c1c;

    
`;

export const BoxTop = styled.div`
    display: flex;
    margin-bottom: 10px;

    h3 {
        min-width: 60%;
        color: #fff;
    }

    span {
        flex: 1;
        color: #919496;        
    }

    @media(max-width: 720px) {
        flex-direction: column;
    }
`;

export const BoxBottom = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        flex: 1;
        padding: 10px 0;

        svg {
            cursor: pointer;
        }
    }

    p {
        max-width: 55%;
        letter-spacing: 2px;
        color: #919496;
        font-family:Arial, Helvetica, sans-serif;
        line-height: 30px;
    }

    @media(max-width: 720px) {
        flex-direction: column;
        padding: 2px;

        p {
            line-height: 15px;
            max-width: 100%;
            font-size: 14px;
        }

        div {
            margin-top: 10px;
            max-width: 90%;
        }
    }
`;