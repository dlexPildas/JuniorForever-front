import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html, #root {
        min-height: 100%;
    }

    input, button {
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;