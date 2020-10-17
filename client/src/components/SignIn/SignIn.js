import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'

const SignIn = (({ currentUser, handleSignIn }) => {
    const history = useHistory();
    const { register, handleSubmit, errors} = useForm();
    const [errorMsg, setErrorMsg] = useState()

    const _handleSignInRedirect = ((data) => {
        handleSignIn(data)
        history.push('/main_map')
    })

    return (
        <div className="sign-in-page">
            <form onSubmit={handleSubmit(_handleSignInRedirect)}>
                <label for="email" >E-mail</label>
                <br />
                <input type="text" name="email" ref={register}></input>
                <br />
                <label for="password">Password</label>
                <br />
                <input type="current-password" name="password" ref={register}></input>
                <br />
                <input type="submit" text='Submit' />
            </form>
            {/* {errorMsg && <h3>{errorMsg}</h3>} */}
        </div>
    );
});

export default SignIn;