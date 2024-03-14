import React from "react";
import styled from "styled-components";

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.text};
    // color: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${props => props.theme.body};
    align-items: top;
    margin: 1rem auto;
    border-bottom: 1px solid ${props => props.theme.body};
    width: fit-content;

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontxl};
    }
`;

const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    // min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 70em) {
        width: 85%;
    }

    @media (max-width: 64em) {
        width: 100%;
        flex-direction: column;
    }
`;

const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SubText = styled.p`
    font-size: ${props => props.theme.fontxl};
    color: ${props => props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1rem auto;
    font-weight: 400;

    @media (max-width: 70em) {
        justify-content: center;
        align-self: center;
        align-items: center;
    }

    @media (max-width: 64em) {
        font-size: ${props => props.theme.fontlg};
        align-items: center;
    }
`;

const Tokenomics = () => {
    return (
        <Section id="tokenomics">
            <Container>
            <Box>
            <Title>
                Tokenomics
            </Title>  
            </Box>
            <Box>
            <SubText>
                10% for advertisement.
            </SubText>
            <SubText>
                20% for development.
            </SubText>
            <SubText>
                70% for airdrop.
            </SubText>
            </Box>
            </Container>
        </Section>
    );
}

export default Tokenomics;