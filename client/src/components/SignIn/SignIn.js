import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
const backgroundImage = require('../../background-home.png')



const HomeWrapperStyled = styled.div`
    margin-top: -22px;
    background-image: url('${backgroundImage}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    text-align: center;
`
const HeaderWrapperStyled = styled.div`
    height: 10vh;
    width: 100%;
    background: rgb(203,104,93);
    background: linear-gradient(180deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);
`

const InteractionWrapperStyled = styled.div`
    height: 25vh;
    width: 25vw;
    margin: 25vh auto;
    padding: 15px 0;
    background: #667;
    font-family: arial;
    font-size: 20px;
    background: rgb(56,163,165);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);

    padding: 0 10px;
    border: 1px solid rgb(203,104,93);
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
    margin-top: 10px;
    padding: 3px 10px;
    border: 3px solid rgb(203,104,93);
    border-radius: 20px;
    background: rgb(203,104,93);
    background: linear-gradient(180deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);

`

const SignIn = (({ currentUser, handleAuthentication }) => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const _handleAuthenticationRedirect = ((data) => {
        handleAuthentication(data)
        history.push('/main_map')
    })

    return (
        <HomeWrapperStyled className="sign-in-page">
            <HeaderWrapperStyled>

            </HeaderWrapperStyled>
            <InteractionWrapperStyled>
                <FormStyled onSubmit={handleSubmit(_handleAuthenticationRedirect)}>
                    <label for="email" >E-mail</label>
                    <br />
                    <InputStyled type="text" name="email" ref={register}></InputStyled>
                    <br />
                    <label for="password">Password</label>
                    <br />
                    <InputStyled type="password" name="password" ref={register}></InputStyled>
                    <br />
                    <InputButtonStyled type="submit" value='Log In' />
                </FormStyled>
            </InteractionWrapperStyled>
        </HomeWrapperStyled>
    );
});

export default SignIn;