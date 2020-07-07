import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 30px;
`;

export const Info = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    svg {
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }
    }

    span {
        font-weight: bold;
        font-size: 20px
    }

    @media (max-width: 720px) {
        width: 30%;

        svg {
            width: 50px;
        }

        span {
            display: none;
        }
    }
`;
