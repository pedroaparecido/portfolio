import styled from "styled-components"

const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 30px;
`

const Name = styled.h1`
    font-size: 20px;
    color: white;
    padding-bottom: 20px;
`

const P = styled.p`
    font-size: 16px;
    color: white;
    padding-bottom: 10px;
`

function FooterName() {
    return(
        <DivFooter>
            <Name>PEDRO APARECIDO</Name>
            <P>Um desenvolvedor Web fullstack construindo e gerenciando sites</P>
            <P>Aplicações otimizadas e com designs inteligentes</P>
        </DivFooter>
    )
}

export default FooterName