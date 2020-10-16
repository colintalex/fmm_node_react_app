import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import useRegisterUser from '../../api_requests/useRegisterUser'

const StyledForm = styled.form`
    display: block;
`
const StyledFormWrapper = styled.div`
    padding: 20px;
`

const StyledInputs = styled.input`
    margin: 10px;
`

const Register = (() => {
    const { register, handleSubmit, errors} = useForm();
    const [currentUser, setCurrentUser] = useState({});
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState()
    

    
    const _onSubmit = ((data) => {
        axios.post('http://localhost:4000/users/register', data)
            .then((res) => {
                history.push('/main_map', {data: res.data})
            })
            .catch((error) => {
                setErrorMsg(error.response.data.error)
            })
    })

    return(
        <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit(_onSubmit)}>
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
            {errorMsg && <h3>{errorMsg}</h3>}
        </StyledFormWrapper>
    )
});

export default Register