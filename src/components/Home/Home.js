import React from 'react';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Menu></Menu>
            <Main></Main>
        </div>
    );
};

export default Home;