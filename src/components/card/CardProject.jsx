import { useState } from "react"
import styled from "styled-components"

import CardVisit from "./CardVisit"

const DivCard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-bottom: 100px;
`

const Card = styled.div`
    background-image: url('${props => props.image}');
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`

const Text = styled.h1`
    z-index: 1;
    font-size: 18px;
    text-align: center;
    border: solid;
`

function CardProject({ image, children }) {
    const [show, setShow] = useState()

    const handleMouseOver = () => {
        setShow(true)
    }

    const handleMouseOut = () => {
        setShow(false)
    }

    return(
        <DivCard>
            <Card image={image} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                {show && <CardVisit>{children}</CardVisit>}
            </Card>
        </DivCard>
    )
}

export default CardProject