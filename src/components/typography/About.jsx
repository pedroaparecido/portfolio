import styled from "styled-components"

const AboutDiv = styled.div`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 50%;
`

const H1 = styled.h1`
    font-size: 35px;
    color: #b9a6f2;
`

const P = styled.p`
    font-size: 20px;
    color: #b9a6f2;
    padding-top: 20px;
`

const Button = styled.div`
    margin-top: 50px;
    padding: 15px 40px;
    background-color: white;
    border-radius: 5px;
    color: #734de5;
    font-weight: bold;
    font-size: 20px;

    cursor: pointer;
`

function About() {
    return(
        <AboutDiv>
            <H1>Vem me conhecer!</H1>
            <P>Eu sou um desenvolvedor Web fullstack iniciando carreira, construindo e gerenciando sites frontend e backend garantindo o sucesso de cada um deles.</P>
            <P>Eu gosto de compartilhar meu conhecimento ao longo do tempo em desenvolvimento Web, isso pode ajudar eu e aos outros da comunidade de desenvolvedores, veja mais detalhes na seção de projetos.</P>
            <P>Eu estou aberto para ofertas de empregos onde eu posso contribuir, aprender e crescer junto com a empresa, não perca tempo e faça contato comigo.</P>
            <Button>Contato</Button>
        </AboutDiv>
    )
}

export default About