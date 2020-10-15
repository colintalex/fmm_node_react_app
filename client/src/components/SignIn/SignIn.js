import React, { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('')

    const _onChange = (event) => {
        setEmail(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="sign-in-page">
            <div>
                <h1>SignIn Page</h1>
            </div>
            <div className="sign-in-form">
                <form>
                    <label for="fname">E-mail:</label>
                    <br />
                    <input type="text" id="fname" name="fname" onChange={_onChange}></input>
                    <br />
                    <label for="lname">Password</label>
                    <br />
                    <input type="text" id="lname" name="lname"></input>
                    <br />
                    <button type="submit">Go!</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;