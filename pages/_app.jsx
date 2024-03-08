import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #ede9fc;
    }
`

function  App({ Component, pageProps }) {
    return(
        <>
        <Component {...pageProps} />
        <GlobalStyle />
        </>
    )
}

export default App