import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeWrapperStyled = styled.div`
    margin-top: -22px;
    background: rgb(56,163,165);
    background: linear-gradient(0deg, rgba(56,163,165,1) 0%, rgba(61,178,180,1) 100%);
    height: 100vh;
    width: 100%;
`

const Home = () => {


    return (
        <HomeWrapperStyled>
            
            <h1>Welcome to Find My Market!</h1>
            <Link to="/main_map">Main Map</Link>
            <Link to="/login">LogIn</Link>
        </HomeWrapperStyled>
    );
};

export default Home;
