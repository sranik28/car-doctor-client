import React from 'react';
import Banner from './header/Banner';
import About from '../components/About';
import Service from '../components/Service';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Service />
        </div>
    );
};

export default Home;