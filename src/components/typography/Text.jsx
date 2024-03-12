import styled from "styled-components"

const TextDiv = styled.div`
    z-index: 1;
    font-size: 50px;
    color: #b9a6f2;
    font-weight: bold;
    text-align: center;
    padding-bottom: 30px;
`

function Text({ children }) {
    return(
        <TextDiv>{children}</TextDiv>
    )
}

export default Text