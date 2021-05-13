import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

function ProfileInfo() {
    const [profileData, setProfileData] = useState([]);

    const getData = () => {
        fetch('./profileInfo.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then((response) => response.json())
            .then((data) => {
                setProfileData(data)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <Profile>
            {
                profileData
                && profileData.length > 0
                && profileData.map(object => (
                    <ProfileContainer key={object.id}>
                        <Type>
                            <span>{object.type}</span>
                        </Type>
                        <Item>
                            {
                                object.item.map(i => (
                                    <Description key={i.id}>
                                        <h4>{i.title}</h4>
                                        {i.description ?
                                            (<span>{i.description}</span>)
                                            : (
                                                <Bar>
                                                    <InneBar>
                                                        <InnerBarFill style={{ width: `${i.rating * 10}%` }} />
                                                    </InneBar>
                                                </Bar>
                                            )
                                        }
                                    </Description>
                                ))
                            }
                        </Item>
                    </ProfileContainer>
                ))
            }
        </Profile>
    )
}

export default ProfileInfo

const Profile = styled.div`
    background-color: #424744;
    min-height: auto;
    color: #e3e3e3;
    display: grid;
    padding: 40px;
    flex-direction: column;
    grid-gap: 40px;

    @media screen and (max-width: 620px){
       font-size: 12px;
   }
`

const ProfileContainer = styled.div`
    display: flex;
    
    width: 100%;
    height: auto;
`

const Type = styled.div`
    min-width: 30%;
    text-align: center;    
    span{
        font-size: 20px;
        
        text-transform: uppercase;
        letter-spacing: 1.3px;
        padding: 2px;
        font-weight: 500;
        border-bottom: 4px solid #ffae00;
        border-radius: 10px;

        @media screen and (max-width: 620px){
            font-size: 14px;
        }
    }
`

const Item = styled.div`
    display: grid;
    flex-direction: column;
  
    grid-gap: 10px;
`
const Description = styled.div`
    display: flex;
    /* border: 1px solid white; */
    flex-direction: column;
    height: auto;    /* border: 1px solid gold; */
    h4{
        letter-spacing: 1.1px;
    }
    
    span {
        font-style: italic;
        font-size: 14px;
    }
`

const Bar = styled.div`
    margin-top: 10px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const InneBar = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 2px solid #ffae00;
    border-radius: 3px;
    background-color: #f9f9f9;

`

const InnerBarFill = styled.div`
    /* width: 30%; */
    height: 100%;
    background-color: #ffae00;
    transition: all 0.3s ease-out;
`