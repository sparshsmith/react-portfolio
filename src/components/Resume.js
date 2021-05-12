import React from 'react'
import styled from 'styled-components'
import Details from './Details'
import ProfileInfo from './ProfileInfo'

// import { Description } from '@material-ui/icons';

function Resume() {
    return (
        <ResumeContainer id='resume'>
            <Details />
            <ProfileInfo />
        </ResumeContainer >
    )
}

export default Resume

const ResumeContainer = styled.div`
    min-height: auto;
    background-color: darkgoldenrod;
    top: 0;
    overflow: hidden;
`


