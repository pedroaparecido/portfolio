import styled from "styled-components"

const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 50px;
    padding-right: 40px;
`

const ButtonStyle = styled.a`
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    color: #734de5;

    cursor: pointer;

`

function Button() {
    return(
        <DivButton>
            <ButtonStyle href="#home">HOME</ButtonStyle>
            <ButtonStyle href="#sobre">SOBRE</ButtonStyle>
            <ButtonStyle href="#projects">PROJETOS</ButtonStyle>
        </DivButton>
    )
}

export default Button