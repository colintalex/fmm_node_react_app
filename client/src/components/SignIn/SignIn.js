import React from 'react'

const SignIn = () => {
    return (
        <div className="sign-in-page">
            <div>
                <h1>SignIn Page</h1>
            </div>
            <div className="sign-in-form">
                <form>
                    <label for="fname">E-mail:</label>
                    <br />
                    <input type="text" id="fname" name="fname"></input>
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