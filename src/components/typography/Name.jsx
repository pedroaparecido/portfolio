import Link from "next/link"
import styled from "styled-components"

const H1 = styled.h1`
    font-size: 14px;
    color: #734de5;
    text-decoration: none;

    cursor: pointer;
`

function Name({ children }) {
    return(
        <Link style={{textDecoration: 'none'}} href="/"><H1>{children}</H1></Link>
    )
}

export default Name