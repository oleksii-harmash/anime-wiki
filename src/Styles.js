import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Ubuntu', sans-serif;
    }
    
    body {
        background-color: #0D0D0D;
    }
`;
export default Style;