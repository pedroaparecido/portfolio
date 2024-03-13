import styled from "styled-components"

import Button from "../input/Button"
import PrincipalImage from "./PrincipalImage"
import Name from "../typography/Name"

const PrimaryDiv = styled.div`
    z-index: 2;
    box-sizing: border-box;
    position: fixed;
    opacity: solid;
    width: 100%;
    padding: 10px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 50px;

    @media (max-width: 426px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        gap: 0;
    }
`

const SecondDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: 30px;

    @media (max-width: 426px) {
        gap: 5px;
        margin-left: 0;
    }
`

function Navbar() {
    return(
        <PrimaryDiv>
            <SecondDiv>
                <PrincipalImage />
                <Name>PEDRO APARECIDO</Name>
            </SecondDiv>
            <Button />
        </PrimaryDiv>
    )
}

export default Navbar