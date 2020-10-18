import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: block;
`
const StyledFormWrapper = styled.div`
    padding: 20px;
`

const StyledInputs = styled.input`
    margin: 10px;
`

const Register = (({ currentUser, handleUserRegister }) => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    
    const _handleUserRegisterRedirect = ((data) => {
        handleUserRegister(data)
        history.push('/main_map')
    })

    return(
        <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit(_handleUserRegisterRedirect)}>
                <StyledInputs
                    placeholder='Username'
                    type='text'
                    ref={register}
                    name='user_name'
                /><br />
                <StyledInputs
                    placeholder='Email'
                    type='text'
                    ref={register}
                    name='email'
                /><br />
                <StyledInputs
                    placeholder='Password'
                    type='password'
                    ref={register}
                    name='password'
                /><br/>
                <StyledInputs
                    placeholder='Confirm Password'
                    type='password'
                    ref={register}
                    name='password2'
                />
                <input type='submit' />
            </StyledForm>
        </StyledFormWrapper>
    )
});

export default Register