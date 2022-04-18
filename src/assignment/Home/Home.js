import React from 'react';
import Banners from '../Banner/Banners/Banners';
import CoverPhoto from '../CoverPhoto/CoverPhoto';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <CoverPhoto></CoverPhoto>
            <Services></Services>
            <Banners></Banners>

        </div>
    );
};

export default Home;