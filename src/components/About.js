import React from 'react'
import styled from 'styled-components'

function About() {
    return (
        <AboutContainer id='about' >
            <AboutMeContent>
                <AboutMeLogo>
                    <img src='/images/about-me.png'></img>
                </AboutMeLogo>
                <Description>
                    <p><span>Hi there! I'm Sparsh Singh. I'm always in for learning new stuff.
                    I have maintained and developed multiple projects from scratch, carrying the development of its' back-end and front-end codebase using MERN stack.
                    If you are trying to solve something complex, let's work together to solve that. Also, don’t hesitate if you want to ask me anything or if you just want to contact me 😊.</span>
                    </p>
                </Description>
            </AboutMeContent>
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.div`
    min-height: 80vh;
    background-color: darkgoldenrod;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AboutMeContent = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
`;

const Description = styled.div`
    width: 60%;

    p {
        text-align: left;
        margin: 20px;
        font-size: 18px;
        letter-spacing: 1.2px;
        padding: 7px;

        span{
            background-color: darkgray;
            color: black;
            line-height: 1.7;
        }
    }

    @media screen and (max-width: 620px){
        width: 90%;
        p {
        text-align: center;
        margin: 20px;
    }
    
    }
`
const AboutMeLogo = styled.div`
    width: 40%;
    overflow: hidden;
    height: 300px;
    
    img {
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width: 620px){
        display: none;
    }
`