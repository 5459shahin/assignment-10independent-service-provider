import React from 'react';

import CoverPhoto from '../CoverPhoto/CoverPhoto';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='main-section'>
             <CoverPhoto></CoverPhoto> 
            <Services></Services>
            

        </div>
    );
};

export default Home;