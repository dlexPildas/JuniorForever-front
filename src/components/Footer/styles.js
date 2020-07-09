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
    width: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    svg {
        cursor: pointer;
        &:hover {
            transform: translateY(-2px)
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
