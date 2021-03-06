import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
const Banner = require('../Home/fmm_banner.png')
const backgroundImage = require('../../background-home.png')

const RegisterWrapperStyled = styled.div`
    backdrop-filter: blur(3px)  brightness(95%);
    height: 100vh;
    width: 100%;
    text-align: center;
`
const HeaderWrapperStyled = styled.div`
    height: 100px;
    width: 100%;
    background: rgb(203,104,93);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
    margin-bottom: 60px;
`

const InteractionWrapperStyled = styled.div`
    height: 35vh;
    width: 25vw;
    margin: 0 auto;
    padding: 15px;
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
    padding: 20px 0 10px 0;
    margin:  auto;
    

`
const InputStyled = styled.input`
    font-size: 1.2em;
    margin-bottom: 7px;
    padding: 0 10px;
    border: 3px solid #38A3A5;
    border-radius: 20px;
    background: rgb(203,104,93);
    background: linear-gradient(180deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);
    border-radius: 60px;
`
const LabelStyled = styled.label`

`

const InputButtonStyled = styled.input`
    display:block;
    font-size: 1.2em;
    margin: 10px auto;
    padding: 3px 10px;
    border: 3px solid rgb(203,104,93);
    border-radius: 20px;
    background: rgb(203,104,93);
    background: linear-gradient(180deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);

`
const Background = styled.div`
    background-image: url('${backgroundImage}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const BannerStyled = styled.img`
    width: 30vw;
    margin-top: 11px;
`


const Register = (({ currentUser, handleUserRegister }) => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    
    const _handleUserRegisterRedirect = ((data) => {
        handleUserRegister(data)
        history.push('/main_map')
    })

    return(
        <Background>
            <RegisterWrapperStyled>
                <HeaderWrapperStyled><BannerStyled src={Banner}/></HeaderWrapperStyled>
                <InteractionWrapperStyled>
                    <h3>Register</h3>
                    <FormStyled onSubmit={handleSubmit(_handleUserRegisterRedirect)}>
                        <InputStyled
                            placeholder='Username'
                            type='text'
                            ref={register}
                            name='user_name'
                        /><br />
                        <InputStyled
                            placeholder='Email'
                            type='text'
                            ref={register}
                            name='email'
                        /><br />
                        <InputStyled
                            placeholder='Password'
                            type='password'
                            ref={register}
                            name='password'
                        /><br/>
                        <InputStyled
                            placeholder='Confirm Password'
                            type='password'
                            ref={register}
                            name='password2'
                        />
                        <InputButtonStyled type='submit' />
                    </FormStyled>
                </InteractionWrapperStyled>
            </RegisterWrapperStyled>
        </Background>
    )
});

export default Register