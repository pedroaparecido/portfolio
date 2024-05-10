import styled from "styled-components"

import Navbar from "../src/components/layouts/Navbar"
import LayoutImage from "../src/components/layouts/LayoutImage"
import Text from "../src/components/typography/Text"
import Paragraph from "../src/components/typography/Paragraph"
import About from "../src/components/typography/About"
import Tag from "../src/components/card/Tag"
import CardProject from "../src/components/card/CardProject"
import FooterName from "../src/components/typography/FooterName"
import FooterSocial from "../src/components/typography/FooterSocial"
import Copy from "../src/components/typography/Copy"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40vh;
    padding-bottom: 30vh;
`

const AboutDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 90px;
    padding-bottom: 20vh;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
`

const SkillDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (max-width: 426px) {
        padding-left: 40px;
    }

    @media (max-width: 376px) {
        padding-left: 20px;
    }

    @media (max-width: 320px) {
        padding-left: 0;
    }
`

const Skill = styled.h1`
    font-size: 35px;
    color: #b9a6f2;
    padding-bottom: 10px;
`

const DivRowSkill = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    padding-right: 20px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 426px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`

const DivProject = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30vh;
`

const DivCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding-left: 30px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 0;
        padding-left: 0;
    }
`

const FooterDiv = styled.div`
    width: 100%;
    height: 50vh;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 426px) {
        
    }
`

const FooterCopy = styled.div`
    width: 100%;
    height: 20vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const A = styled.a`
    cursor: auto;
    text-decoration: none;

    @media (max-width: 376px) {
        width: 350px;
    }

    @media (max-width: 320px) {
        width: 300px;
    }
`

function HomePage() {
    return(
        <>
            <Navbar />
            <a name="home"></a>
            <LayoutImage />
            <a name="sobre"></a>
            <StyledDiv>
                <Text>SOBRE MIM</Text>
                <Paragraph>Aqui sera apresentado mais sobre mim em termos de programação especificamente</Paragraph>
            </StyledDiv>
            <AboutDiv>
                <About />
                <SkillDiv>
                    <Skill>Minhas habilidades</Skill>
                    <DivRowSkill>
                        <Tag>HTML</Tag>
                        <Tag>CSS</Tag>
                        <Tag>SASS</Tag>
                        <Tag>Responsive</Tag>
                        <Tag>JavaScript</Tag>
                        <Tag>React</Tag>
                        <Tag>NextJS</Tag>
                        <Tag>Node</Tag>
                        <Tag>Java</Tag>
                        <Tag>Flutter</Tag>
                        <Tag>MongoDB</Tag>
                        <Tag>GraphQL</Tag>
                        <Tag>GIT</Tag>
                        <Tag>Github</Tag>
                    </DivRowSkill>
                </SkillDiv>
            </AboutDiv>
                <a name="projects"></a>
            <DivProject>
                <Text>MEUS PROJETOS RECENTES</Text>
            </DivProject>
            <DivCard>
                <A href="https://https://barber-shop-oy3hrfepe-pedro-aparecidos-projects.vercel.app/" target="_blank"><CardProject image={'/barbershop.png'}>Barber Shop: uma barbearia online para agendamento horários</CardProject></A>
                <A href="https://social-dev-jet.vercel.app" target="_blank"><CardProject image={'/socialdev.png'}>Social Dev: uma rede social para desenvolvedores</CardProject></A>
                <A href="https://react-jogo-da-velha-steel-sigma.vercel.app/" target="_blank"><CardProject image={'/jogodavelha.png'}>Jogo da Velha: um jogo da velha feito em javascript</CardProject></A>
            </DivCard>
            <FooterDiv>
                <FooterName />
                <FooterSocial />
            </FooterDiv>
            <FooterCopy>
                <Copy />
            </FooterCopy>
        </>
    )
}

export default HomePage