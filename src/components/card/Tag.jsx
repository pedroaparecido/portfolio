import styled from "styled-components"

const TagSkill = styled.div`
    padding: 10px;
    background-color: white;
    color: #734de5;
    border-radius: 10px;
    text-align: center;
`

function Tag({ children }) {
    return(
        <TagSkill>{children}</TagSkill>
    )
}

export default Tag