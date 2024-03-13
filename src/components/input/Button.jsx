import styled from "styled-components"

const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 50px;
    padding-right: 40px;

    @media (max-width: 426px) {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        gap: 8px;
        padding-right: 0;
    }
`

const ButtonStyle = styled.a`
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    color: #734de5;

    cursor: pointer;

    @media (max-width: 426px) {
        font-size: 12px;
    }
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