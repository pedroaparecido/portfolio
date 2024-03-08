import styled from "styled-components"

const Button = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
`

function ButtonPage({ children }) {
    return(
        <Button>{children}</Button>
    )
}

export default ButtonPage