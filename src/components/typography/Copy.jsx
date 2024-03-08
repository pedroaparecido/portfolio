import styled from "styled-components"

const HR = styled.hr`
    color: white;
    width: 90%;
`

const P = styled.p`
    padding-top: 50px;
    font-size: 12px;
    color: white;
`

const Span = styled.span`
    font-weight: bold;
    font-size: 12px;
    text-decoration: underline;
`

function Copy() {
    return(
        <>
            <HR />
            <P>©️ Copyright 2024. Feito por <Span>PEDRO APARECIDO</Span></P>
        </>
    )
}

export default Copy