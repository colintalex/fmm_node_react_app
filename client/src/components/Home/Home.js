import React from 'react';


import { Link } from 'react-router-dom'

const Home = () => {


    return (
        <div>
            
            <h1>Welcome to Find My Market!</h1>
            <Link to="/main_map">Main Map</Link>
            <Link to="/login">LogIn</Link>
        </div>
    );
};

export default Home;
