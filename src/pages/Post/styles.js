import styled from 'styled-components'


export const Container = styled.div `
    font-size: 24px;
    display: flex;
    flex-direction: column;
    max-width: 50%;
    min-height: 300px;
    margin: 60px auto;
    padding: 20px;

    h2 {
        text-align: center;
        margin-bottom: 60px;
        font-size: 48px;
    }

    @media(max-width: 1300px){
        max-width: 70%;
    }

    @media(max-width: 1128px){
        margin: 40px auto;
        max-width: 80%;
        padding: 5px;
    }    

    
    @media (max-width: 720px) {
        h2 {
            font-size: 24px;
        }
    }
`;

export const Author = styled.div`
    margin-top: 100px;
    display: flex;
    align-content: center;
    
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: #eee;
    }

    @media (max-width: 1128px) {
        flex-direction: column;
        place-items: center;

        img {
            width: 75px;
            height: 75px;
        }
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid #7159c1;
    
    span {
        font-weight: bold;
        margin-bottom: 15px;
    }

    @media (max-width: 1128px) {
        flex-direction: column;
        place-items: center;
        margin-top: 8px;
       
        img {
            text-align: center;
        }

        span {
            font-size: 16px;
            margin-bottom: 7px;
            text-align: center;
        }
        
        p {
            text-align: center;
            margin-bottom: 8px;
            font-size: 14px;
        }
    }
`;