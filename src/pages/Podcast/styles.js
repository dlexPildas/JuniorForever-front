import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    min-height: 70vh;
    border-radius: 5px;
    padding: 30px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;

    li {
        margin-top: 30px;
    }

    @media (max-width: 1128px) {
        max-width: 80%;
        padding: 5px;
    }
`;
