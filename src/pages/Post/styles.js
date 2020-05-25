import styled from 'styled-components'


export const Container = styled.div `
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

export const Author = styled.div`
    margin-top: 100px;
    display: flex;
    align-content: center;
    img {
        flex: 1;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: #eee;
    }
`;

export const Info = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid #7159c1;
    span {
        font-weight: bold;
        margin-bottom: 15px;
    }
`;