import styled from "styled-components"

import Text from "../typography/Text"
import Paragraph from "../typography/Paragraph"

const PrimaryDiv = styled.div`
    background-image: url('/blob-scene-haikei.svg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 87vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function LayoutImage() {
    return(
        <>
            <PrimaryDiv>
                <Text>OLÁ, EU SOU PEDRO APARECIDO!</Text>
                <Paragraph>Um desenvolvedor web construindo e gerenciando sites</Paragraph>
                <Paragraph>Aplicações otimizadas e com designs inteligentes</Paragraph>
            </PrimaryDiv>
        </>
    )
}

export default LayoutImage