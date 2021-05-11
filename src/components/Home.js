import React from 'react'
import styled from 'styled-components'
import Typical from 'react-typical';
import Delayed from '../utils/Delayed';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Home() {
    return (
        <HomeContainer id='home'>
            <HomeImageContainer>
                <img src='/images/home.jpg' alt='home image' />
            </HomeImageContainer>
            <HomeContent>
                <h1>Hi, I'm <b>Sparsh</b> ;)</h1>
                <h4>
                    The{' '}
                    <Delayed>
                        <Typical
                            steps={
                                ["Developer.", 2000,
                                    "Programmer.", 2000,
                                    "Creator.", 2000,
                                    "Problem Solver.", 2000
                                ]}
                            loop={Infinity}
                            wrapper="b" />
                    </Delayed>
                </h4>
                <IconContainer>
                    <FacebookIcon onClick={event => window.open('https://www.facebook.com/sparshs2/', "_blank")} />
                    <InstagramIcon onClick={event => window.open('https://www.instagram.com/sparshsmith/', "_blank")} />
                    <LinkedInIcon onClick={event => window.open('https://linkedin.com/in/sparsh-smith-singh-ab8a63a5', "_blank")} />
                    <GitHubIcon onClick={event => window.open('https://github.com/sparshsmith', "_blank")} />
                </IconContainer>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    top: 0px;
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; 
    text-align: center;

`
const HomeImageContainer = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    z-index: -1;
    position: absolute;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        background-position: center;
    }
`;

const HomeContent = styled.div`
    color: white;
    /* margin-top: 150px; */
    padding: 30px;
    text-align: center;
    letter-spacing: 1.2px;
   

    b {
        color: #ffae00;
    }

    h1 {
        font-size: 54px;
    }

    h4{
        margin-top: 20px;
        padding: 0 40px;
        font-size: 24px;

        
    }
`

const IconContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    grid-gap: 10px;
   
    a {
        text-decoration: none;
    }
    
    > .MuiSvgIcon-root{
        cursor: pointer;
        transition: all 500ms;

        :hover {
            transform: scale(1.4);
        }
    }
`