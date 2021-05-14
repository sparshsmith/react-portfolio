import React, { useState } from 'react'
import styled from 'styled-components';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [showDialog, setShowDialog] = useState({
        open: false,
        message: '',
        success: false
    });

    const closeDialog = () => {
        setShowDialog({
            open: false,
            message: '',
            success: false
        });
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    const handleSubjectChange = event => {
        setSubject(event.target.value);
    }
    const handleMessageChange = event => {
        setMessage(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '')
            return;
        const data = {
            from_name: name,
            reply_to: email,
            subject,
            message
        };
        console.log(data);
        emailjs.send('service_0nclcwd', 'template_7jlt7rc', data, 'user_uFxIEWynzoCya5JlT02bQ') //
            .then((result) => {
                setShowDialog({
                    open: true,
                    message: 'Email Sent Succefully!',
                    success: true
                });
            }, (err) => {
                setShowDialog({
                    open: true,
                    message: 'There was an issue while sending email. Please try again later!',
                    success: false
                });
            });
        handleClear();
    }

    const handleClear = (e) => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <ContactContainer id='contact' >
            <h1>Have something to write?</h1>
            <ContactForm onSubmit={handleSubmit}>
                <EmailOutlinedIcon />
                <>
                    <Input>
                        <input type='text' placeholder="Name" id='name' value={name} onChange={handleNameChange} ></input>
                    </Input>
                    <Input>
                        <input type='email' placeholder="Email" id='email' value={email} onChange={handleEmailChange}></input>
                    </Input>
                    <Input>
                        <input type='text' placeholder="Subject" id='subject' value={subject} onChange={handleSubjectChange}></input>
                    </Input>
                    <Input>
                        <textarea type='text' placeholder="Message" id='message' value={message} onChange={handleMessageChange}></textarea>
                    </Input>
                </>
                <ButtonContainer>
                    <Button type='submit'>Send</Button>
                    <Button onClick={handleClear}>Clear</Button>
                </ButtonContainer>
            </ContactForm>
            <Dialog open={showDialog.open} onClose={closeDialog}>
                <DialogContent>
                    <DialogContainer>
                        {
                            showDialog.success ? (
                                <img src='/images/success.png' alt='success' />
                            ) : (<img src='/images/error.png' alt='error' />)
                        }
                        <h5>{showDialog.message}</h5>
                    </DialogContainer>
                </DialogContent>
            </Dialog>
            <span>© Made by Sparsh. All rights reserved.</span>
        </ContactContainer>
    )
}

export default Contact

const ContactContainer = styled.div`
    min-height: 90vh;
    background-color: black;
    display: flex;
    align-items: center;
    color: white;
    flex-direction:column;
    h1{
        margin-top: 60px;
    }

    span{
        /* margin-top: 10px; */
    }
`

const ContactForm = styled.form`
    border: 3px solid white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 10px;
    margin-top:30px;
    margin-bottom: 30px;

    .MuiSvgIcon-root{
        font-size: 55px;
    }
`

const Input = styled.div`
    width: 100%;
    padding: 10px;
    background-color: white;
    margin:10px 0px;
    border-radius: 7px;
    overflow: hidden;

    input{
        width: 98%;
        padding: 5px;
        font-size: 15px;
        margin:0 10px;
        outline: 0;
        background-color: transparent;
        border: none;
    }

    textarea{
        width: 98%;
        padding: 5px;
        font-size: 15px;
        margin:0 10px;
        outline: 0;
        background-color: transparent;
        border: none;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 10px;

    Button{
        flex:0.5;
        width: 100%;
        padding: 10px;
        margin: 5px;
        margin-bottom: 30px;
        color: black;
        background-color: #bfbfbf;

        :hover {
            background-color: #999999;
        }
    }
`
const DialogContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        height: 100px;
        width: 100px;
        padding: 20px;
    }

    h5{
        padding: 10px;
        letter-spacing: 1.1px;
    }
`