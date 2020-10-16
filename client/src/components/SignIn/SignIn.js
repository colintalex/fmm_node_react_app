import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const SignIn = (() => {
    const { register, handleSubmit, errors} = useForm();
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState()

    const _onChange = (event) => {
        setEmail(event.target.value)
        console.log(event.target.value)
    }
    const _onSubmit = ((data) => {
        console.log(data)
        axios.post('http://localhost:4000/auth', data)
            .then((res) => {
                history.push('/main_map', {data: res.data})
            })
            .catch((error) => {
                setErrorMsg(error.response.data.error)
            })
    })

    return (
        <div className="sign-in-page">
            <form onSubmit={handleSubmit(_onSubmit)}>
                <label for="email">E-mail:</label>
                <br />
                <input type="text" name="email" ref={register}></input>
                <br />
                <label for="password">Password</label>
                <br />
                <input type="password" name="password" ref={register}></input>
                <br />
                <input type="submit" text='Submit' />
            </form>
            {errorMsg && <h3>{errorMsg}</h3>}
        </div>
    );
});

export default SignIn;