import styled from "styled-components"

const ParagraphDiv = styled.p`
    z-index: 1;
    font-size: 25px;
    color: #b9a6f2;
    padding-left: 20px;
`

function Paragraph({ children }) {
    return(
        <ParagraphDiv>{children}</ParagraphDiv>
    )
}

export default Paragraph