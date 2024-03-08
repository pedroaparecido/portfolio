import styled from "styled-components"

const DivBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text = styled.p`
    z-index: 1;
    font-size: 22px;
    text-align: center;
    padding-bottom: 20px;
`

const Border = styled.h1`
    z-index: 1;
    font-size: 20px;
    text-align: center;
    border: solid;
    border-radius: 20px;
    padding: 10px;

    cursor: pointer;
`

function CardVisit({ children }) {
    return(
        <DivBorder>
            <Text>{children}</Text>
            <Border>Visite o Site</Border>
        </DivBorder>
    )
}

export default CardVisit