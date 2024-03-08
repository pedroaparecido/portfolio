import styled from "styled-components"

import Button from "../input/Button"
import PrincipalImage from "./PrincipalImage"
import Name from "../typography/Name"

const PrimaryDiv = styled.div`
    z-index: 2;
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
`

const SecondDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: 30px;
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