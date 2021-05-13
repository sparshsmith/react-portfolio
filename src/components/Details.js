import React from 'react'
import styled from 'styled-components';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';

function Details() {
    return (
        <DetailContainer>
            <ContactDetails>
                <h3>Contact Details</h3>
                <ContactDetailsItem>
                    Sparsh Singh
                    </ContactDetailsItem>
                <ContactDetailsItem>
                    <LocationCityIcon />
                    Hyderabad, India
                    </ContactDetailsItem>
                <ContactDetailsItem>
                    <PhoneIcon />
                    +91-8897600944
                    </ContactDetailsItem>
                <ContactDetailsItem>
                    <EmailIcon />
                    sparshsmith@outlook.com
                    </ContactDetailsItem>
            </ContactDetails>
            <Download>
                <Button
                    variant="contained"
                    color="secondary"
                    className="downloadButton"
                    startIcon={<GetAppIcon />}
                    onClick={event => window.open("https://drive.google.com/file/d/15vQS9P7aLHtaytU5hJoTj8a5RGQWYz_u/view?usp=sharing", "_blank")}
                >Download Resume</Button>
            </Download>
        </DetailContainer>
    )
}

export default Details


const DetailContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 20px;
    @media screen and (max-width: 620px){
        width: 100%;
    }
`

const ContactDetails = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 33%;
   padding: 5px;

   @media screen and (max-width: 620px){
       margin-left: 60px;
       font-size: 12px;
   }
     
    
`
const ContactDetailsItem = styled.span`
    display: flex;
    align-items: center;
    margin-top: 5px;
    

    > .MuiSvgIcon-root {
        margin-right: 5px;
        font-size: 15px;
    }
`
const Download = styled.div`
    margin-left: 40px;
    padding: 10px;
    
    .downloadButton{
        color: white;
        background-color: #333634;
        
        @media screen and (max-width: 480px){
            font-size: 8px;
        }

        :hover {
            background-color: #424744;
        }
    }

    @media screen and (max-width: 480px){
        margin-left: 50px;
        width: 90%;
        flex-direction: column;
        margin-left:0px;
        font-size: 12px;
    }
    
`