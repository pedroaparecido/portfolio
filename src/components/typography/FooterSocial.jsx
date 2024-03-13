import styled from "styled-components"

const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 50vh;
    padding-right: 25px;

    @media (max-width: 426px) {
        padding-left: 0;
    }
`

const Name = styled.h1`
    font-size: 20px;
    color: white;
    padding-bottom: 20px;
`

const DivIco = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const Ico = styled.div`
    background-image: url('${props => props.image}');
    background-repeat: no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;

    cursor: pointer;
`

function FooterSocial({ image }) {
    return(
        <DivFooter>
            <Name>SOCIAL</Name>
            <DivIco>
                <a href="https://www.linkedin.com/in/pedro-aparecido-rodrigues-474ab3222/" target="_blank"><Ico image="/linkedin-ico.png" /></a>
                <a href="https://github.com/pedroaparecido" target="_blank"><Ico image="/github-ico.png" /></a>
            </DivIco>
        </DivFooter>
    )
}

export default FooterSocial