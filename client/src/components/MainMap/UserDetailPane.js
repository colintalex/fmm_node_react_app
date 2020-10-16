import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledUserDetailPane = styled.div`
    height: auto;
    padding: 20px 10px;
    background-color: #38A3A5;
    margin: 10px;
    border-radius: 20px;
    box-shadow: 1px 4px 8px black;
`

const UserDetailPane = ((props) => {
    const user = props.currentUser
    if(user){
        return (
            <StyledUserDetailPane>
                Current User: {props.currentUser.user_name}<br/>
                Favorites: {props.currentUser.favorites}
            </StyledUserDetailPane>
        )
    }else{
        return(
            <StyledUserDetailPane>
                <h5>Currently using as Guest</h5>
                <Link to='/login'text='login'>Log In to View Favorites!</Link><br/>
                <Link to='/register'text='signup'>Ready to sign up? Click here!</Link>
            </StyledUserDetailPane>
        )
    }
});

export default UserDetailPane;