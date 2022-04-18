import React from 'react';

import banner1 from '../../../images/expert-1.jpg';
import banner2 from '../../../images/expert-2.jpg';
import banner3 from '../../../images/expert-3.jpg';
import banner4 from '../../../images/expert-4.jpg';
import banner5 from '../../../images/expert-5.jpg';
import banner6 from '../../../images/expert-6.png';
import Banner from '../Banner';

const banners = [ 
    {id: 1, name: 'will smith', img: banner1},
    {id: 2, name: 'will smith', img: banner2},
    {id: 3, name: 'will smith', img: banner3},
    {id: 4, name: 'will smith', img: banner4},
    {id: 5, name: 'will smith', img: banner5},
    {id: 6, name: 'will smith', img: banner6}
]

const Banners = () => {

    return (
        <div className='container'>
            <h2 className='text-primary text-center'>This is banners</h2>
            <div className="row">
                {
                   banners.map(banner => <Banner
                   key={banner.id}
                   banner= {banner}
                   ></Banner>) 
                }
            </div>
        </div>
    );
};

export default Banners;