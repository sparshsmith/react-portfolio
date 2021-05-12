import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

function ProjectsViewer() {
    const [projectData, setProjectData] = useState([]);

    const getData = () => {
        fetch('./projectList.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then((response) => response.json())
            .then((data) => {
                setProjectData(data);
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <Container>
            {
                projectData
                && projectData.length > 0
                && projectData.map(project => (
                    <Wrap>
                        <img src={project.imagePath} alt="" />
                    </Wrap>
                ))
            }
        </Container>
    )
}

export default ProjectsViewer


const Container = styled.div`
    margin: 30px 30px 0 30px;
    
    padding: 40px;
    display: grid;
    min-height: auto;
    
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 25px;    

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    //
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    } 

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;