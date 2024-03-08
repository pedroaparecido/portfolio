import Link from "next/link"
import styled from "styled-components"

const ImageDiv = styled.div`
    background-image: url('/perfil.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    width: 60px;
    height: 60px;

    cursor: pointer;
`

function PrincipalImage() {
    return(
        <Link href="/"><ImageDiv /></Link>
    )
}

export default PrincipalImage