import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledUserDetailPane = styled.div`
    height: auto;
    width: 40vw;
    margin-right: auto;
    padding: 20px 10px;
    background: rgb(56,163,165);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
    margin: 15px;
    border-radius: 20px;
    border: 1px solid #888;
    box-shadow: 2px 4px 10px #333;

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

// NOTE-- Add logout button