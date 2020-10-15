import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import useUserPost from '../../api_requests/useUserPost'

const Register = (() => {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [password2, setPassword2] = useState('');
    const { register, handleSubmit, errors} = useForm();
    const [currentUser, setCurrentUser] = useState({});
    const history = useHistory();
    

    
    const _onSubmit = ((data) => {
        axios.post('http://localhost:4000/users/register', data)
            .then((res) => {
                history.push('/main_map', {data: res.data})
            })
            .catch((error) => console.log(error))
            console.log('done')
            
    })

    return(
        <div>
            <form onSubmit={handleSubmit(_onSubmit)}>
                <input
                    placeholder='Username'
                    type='text'
                    ref={register}
                    name='user_name'
                />
                <input
                    placeholder='Email'
                    type='text'
                    ref={register}
                    name='email'
                />
                <input
                    placeholder='Password'
                    type='text'
                    ref={register}
                    name='password'
                />
                <input
                    placeholder='Confirm Password'
                    type='text'
                    ref={register}
                    name='password2'
                />
                <input type='submit' />
            </form>
        </div>
    )
});

export default Register