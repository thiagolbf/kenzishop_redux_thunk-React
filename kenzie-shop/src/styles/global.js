import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --mainBackground: #DCDCDC;
        --cartBackground: #F8F9FA;

        --buttonBackground: #2271B3;
        --buttonHoverBackground: #483D8B;

        --letterTitle: #121214;
        --letterText: #868E96;
        --cartNumber: red;

    }

    body {
        background: var(--mainBackground);

    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }


`;
