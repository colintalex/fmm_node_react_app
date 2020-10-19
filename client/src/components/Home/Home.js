import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
const backgroundImage = require('../../background-home.png')

const HomeWrapperStyled = styled.div`
    margin-top: -22px;
    height: 100vh;
    width: 100%;
    text-align: center;
    backdrop-filter: blur(3px)  brightness(95%);
`
const HeaderWrapperStyled = styled.div`
    height: 10vh;
    width: 100%;
    background: rgb(203,104,93);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
`

const InteractionWrapperStyled = styled.div`
    height: 45vh;
    width: 25vw;
    margin: 25vh auto;
    padding: 15px 0;
    background: linear-gradient(180deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);
    font-family: arial;
    font-size: 20px;
    padding: 0 10px;
    border: 1px solid #888;
    border-radius: 20px;
`
const FormStyled = styled.form`
    padding: 10px 0;
`
const InputStyled = styled.input`
    font-size: 1.2em;
    margin-bottom: 7px;
    padding: 0 10px;
    border: 3px solid #38A3A5;
    border-radius: 20px;
`
const LabelStyled = styled.label`

`

const InputButtonStyled = styled.input`
    font-size: 1.2em;
    margin-bottom: 7px;
    padding: 0 10px;
    border: 3px solid rgb(203,104,93);
    border-radius: 20px;
    background: rgb(203,104,93);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);

`

const ButtonStyled = styled.button`
    display: inline-block;
    font-size: 1em;
    width: 75%;
    height: 55px;
    border: 3px solid rgb(203,104,93);
    border-radius: 20px;
    background: rgb(203,104,93);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);

`
const Background = styled.div`
    background-image: url('${backgroundImage}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const Home = ({ handleAuthentication, currentUser }) => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const _handleAuthenticationRedirect = ((data) => {
        handleAuthentication(data)
        history.push('/main_map')
    })

    useEffect(() => {
        if(currentUser.user) history.push('/main_map')
    }, [])

    return (
        <Background>
            <HomeWrapperStyled>
                <HeaderWrapperStyled className='header-wrapper'>
                    <h1>Welcome to Find My Market!</h1>
                </HeaderWrapperStyled>
                <InteractionWrapperStyled>
                    <FormStyled onSubmit={handleSubmit(_handleAuthenticationRedirect)}>
                        <LabelStyled>I heard you were looking for farmers markets?<br/> We got you covered! Sign in, sign up or go as a ghost!</LabelStyled>
                        <hr/>
                        <LabelStyled>Sign In To View Favorite Markets</LabelStyled>
                        <InputStyled type='text' name='email' ref={register} placeholder='Email'></InputStyled><br/>
                        <InputStyled type='password' name='password' ref={register} placeholder='Password'></InputStyled><br/>
                        <InputButtonStyled type='submit'></InputButtonStyled>
                    </FormStyled>
                    <hr/>
                    <ButtonStyled onClick={() => history.push('/main_map')}>Continue as Guest</ButtonStyled>
                    <ButtonStyled to="/register">Sign Up</ButtonStyled>
                </InteractionWrapperStyled>
            </HomeWrapperStyled>
        </Background>
    );
};

export default Home;
