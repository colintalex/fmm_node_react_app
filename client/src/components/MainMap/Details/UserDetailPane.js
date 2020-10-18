import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserFavoritesDetail from './UserFavoritesDetail'

const StyledUserDetailPane = styled.div`
    height: auto;
    width: 40vw;
    margin-right: auto;
    padding: 0 0 20px 0px;
    background: rgb(56,163,165);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
    margin: 15px;
    border-radius: 20px;
    border: 1px solid #888;
    box-shadow: 2px 4px 10px #333;
    text-align: center;
`

const StyledLinkDiv = styled.div`
    display: inline-block;
    width: 35%;
    height: 30px;
    opacity: 95%;
    font-size: 18px;
    background: rgb(203,104,93);
    background: linear-gradient(180deg, rgba(203,104,93,1) 0%, rgba(239,130,117,1) 100%);
    border: 3px solid #555;
    border-radius: 20px;
    margin-left: 5px;
    padding-top: 5px;
    text-align: center;

    .logger-button {
        text-decoration: none;
        font-weight: bold;
        color: #444;
    }
    `

const UserDetailPane = (({currentUser, handleUserFavorites, handleMarketGoTo}) => {
    const user = currentUser.user
    if(user){
        return (
            <StyledUserDetailPane>
                <h3>Current User: {user.user_name}</h3>
                <UserFavoritesDetail 
                    handleMarketGoTo={handleMarketGoTo}
                    currentUser={currentUser} 
                    handleUserFavorites={handleUserFavorites}
                    className='favorites-grid' 
                />
            </StyledUserDetailPane>
        )
    }else{
        return(
            <StyledUserDetailPane>
                <h5>Currently using as Guest</h5>
                <p>Feel free to browse the map, but you will<br/> need to login to save favorites!</p>
                <StyledLinkDiv>
                    <Link className='logger-button' to='/login'>Click to Login</Link>
                </StyledLinkDiv>
                <StyledLinkDiv>
                    <Link className='logger-button' to='/register'>Click to Register</Link>
                </StyledLinkDiv>
            </StyledUserDetailPane>
        )
    }
});

export default UserDetailPane;

// NOTE-- Add logout button