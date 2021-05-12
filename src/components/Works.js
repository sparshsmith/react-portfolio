import React from 'react'
import styled from 'styled-components'
import ProjectsViewer from './ProjectsViewer'

function Works() {
    return (
        <WorksContainer id='works'>
            <h1>
                Here are some of my Works
            </h1>
            <ProjectsViewer />
        </WorksContainer>
    )
}

export default Works

const WorksContainer = styled.div`
    min-height: auto;
    background: #bfbfbf;
    color: black;

    h1{
        color: #6f6f6f;
        font-family: 'Dancing Script', cursive;
        text-align: center;
        padding-top: 100px;
        font-size: 40px;
    }
`