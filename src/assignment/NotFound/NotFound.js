import React from 'react';
import notFound from '../../images/not-found.jpg';
import  './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img className='w-50' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;