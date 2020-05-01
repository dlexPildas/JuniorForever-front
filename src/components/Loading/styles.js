import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`;

export const ActionLoad = styled.div`
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        animation: ${rotate} 1.5s linear infinite;
    }

`;

