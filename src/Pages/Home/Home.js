import React from 'react';
import Main from '../../components/Main/Main';
import Menu from '../../components/Menu/Menu';
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