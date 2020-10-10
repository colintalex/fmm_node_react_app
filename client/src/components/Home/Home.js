import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome to Find My Market!</h1>
            <Link to="/main_map">Main Map</Link>
        </div>
    );
};

export default Home;
