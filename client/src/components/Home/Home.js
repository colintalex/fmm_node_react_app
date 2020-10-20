import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
const backgroundImage = require('../../background-home.png')
const Banner = require('./fmm_banner.png')

const HomeWrapperStyled = styled.div`
    height: 100vh;
    width: 100%;
    text-align: center;
    backdrop-filter: blur(3px)  brightness(95%);
`
const HeaderWrapperStyled = styled.div`
    height: 100px;
    width: 100%;
    background: rgb(203,104,93);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
    margin-bottom: 60px;
`

const InteractionWrapperStyled = styled.div`
    height: auto;
    width: auto;
    margin: 3px auto;
    background: linear-gradient(0deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);
    font-family: arial;
    font-size: 20px;
    border: 1px solid #888;
    border-radius: 60px;
`

const PrimaryInteractionWrapperStyled = styled.div`
    height: auto;
    width: auto;
    margin: 0 auto 10px auto;
    padding: 5px 10px;
    background: linear-gradient(0deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);
    font-family: arial;
    font-size: 20px;
    border: 1px solid #888;
    border-radius: 60px;
`

const FormStyled = styled.form`
    padding: 5px 0;
`
const InputStyled = styled.input`
    font-size: 1.2em;
    margin-bottom: 7px;
    padding: 0 10px;
    border: 3px solid #38A3A5;
    border-radius: 20px;
    background: rgb(203,104,93);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
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
    display: block;
    margin: 10px auto;
    padding: 11px 20px;
    font-size: 1em;
    width: auto;
    height: 55px;
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
    height: 100vh;
`

const StyledHeading = styled.h2`
    margin: 10px 5px;
`

const ButtonWrapperStyle = styled.div`
    width: 15vw;
    margin: 15px auto;
    padding: 25px 0px;
    background: rgb(203,104,93);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
    font-family: arial;
    font-size: 20px;
    padding: 0 10px;
    border: 1px solid #888;
    border-radius: 40px;
`

const BannerStyled = styled.img`
    height: 90px;
    margin: 10px 0;
`

const InteractionBackground = styled.div`
    height: auto;
    width: 30vw;
    margin: 100px auto;
    padding: 15px;
    font-family: arial;
    font-size: 20px;
    border: 1px solid #888;
    border-radius: 60px;
    margin: 0 auto;
    background: rgb(203,104,93);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
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
                        <BannerStyled src={Banner}/>
                </HeaderWrapperStyled>
                    <InteractionBackground>
                        <PrimaryInteractionWrapperStyled>
                                <LabelStyled>
                                    <StyledHeading>Looking for farmers markets?</StyledHeading>
                                    <StyledHeading>We got you covered!</StyledHeading>
                                    <p>Using an enhanced API, FindMyMarket can provide what you're looking for in a market.. faster and easier!<br/>
                                    Sign in, sign up or go as a guest!</p>
                                </LabelStyled>
                        </PrimaryInteractionWrapperStyled>
                        <InteractionWrapperStyled>
                            <FormStyled onSubmit={handleSubmit(_handleAuthenticationRedirect)}>
                                <h3>Sign In To View Favorite Markets</h3>
                                <InputStyled type='text' name='email' ref={register} placeholder='Email'></InputStyled><br/>
                                <InputStyled type='password' name='password' ref={register} placeholder='Password'></InputStyled><br/>
                                <InputButtonStyled type='submit'></InputButtonStyled>
                            </FormStyled>
                        </InteractionWrapperStyled>
                    </InteractionBackground>
                <ButtonWrapperStyle>
                    <StyledHeading>-OR-</StyledHeading>
                    <ButtonStyled onClick={() => history.push('/register')}>Sign Up</ButtonStyled>
                    <ButtonStyled onClick={() => history.push('/main_map')}>Continue as Guest</ButtonStyled>
                </ButtonWrapperStyle>
            </HomeWrapperStyled>
        </Background>
    );
};

export default Home;
