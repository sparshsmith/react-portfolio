import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

function DialogContainer(props) {


    const getIconUrl = (technologyName) => {
        let url = "";
        switch (technologyName) {
            case "Firebase":
                url = "https://img.icons8.com/color/48/000000/firebase.png";
                break;
            case "ReactJS":
                url = "https://img.icons8.com/bubbles/50/000000/react.png";
                break;
            case "NodeJS":
                url = "https://img.icons8.com/color/50/000000/nodejs.png";
                break;
            case "MongoDB":
                url = "https://img.icons8.com/color/48/000000/mongodb.png";
                break;
            case "Javascript":
                url = "https://img.icons8.com/color/48/000000/javascript.png";
                break;
            case "HTML":
                url = "https://img.icons8.com/color/48/000000/html-5.png";
                break;
            case "CSS":
                url = "https://img.icons8.com/color/48/000000/css3.png";
                break;
            default:
                url = null;
        }
        return url;
    }

    return (
        <>
            {
                props.title && (
                    <Container>
                        <h1>{props.title}</h1>
                        <ImageContainer>
                            <img src={props.imagePath} alt={props.name} />
                        </ImageContainer>
                        <DetailContainer>
                            <p>{props.description}</p>
                            <Technology>
                                <span>Technology Used</span>
                                <div>
                                    {
                                        props.technology.map(t => (
                                            <img src={getIconUrl(t)} alt={t} />
                                        ))
                                    }
                                </div>
                            </Technology>
                            <Button onClick={event => window.open(props.url, "_blank")}>View Demo</Button>
                        </DetailContainer>
                    </Container>
                )
            }
        </>
    )
}

export default DialogContainer

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    color: #5c5c5c;

`
const ImageContainer = styled.div`
    flex: 0.5;
    height: 50%;
    margin-top: 20px;

    img{
        height: 100%;
        width: 100%;
        border: 3px solid #757575;
        border-radius: 10px;
    }
`

const DetailContainer = styled.div`
    /* border: 1px solid black; */
    border-radius: 10px;
    margin-top: 15px;
    p{
        text-align: center;
        font-weight: 600;
    }

    Button{
        width: 100%;
        padding: 10px;
        margin: 10px;
        margin-bottom: 30px;
        color: white;
        background-color: #a39a3c;

        :hover {
            background-color: #7a7436;
        }
    }
    
`
const Technology = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span{
        
        letter-spacing: 1.1px;
        font-weight: 600;
        text-transform: uppercase;
    }
`