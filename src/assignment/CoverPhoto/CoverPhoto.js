import React from 'react';
import cover from '../../images/banner (2).jpg'
import './CoverPhoto.css'

const CoverPhoto = () => {
    return (
        <div className=''>
            
              <img  className='cover-photo' src={cover} alt="..."/>  
        </div>
    );
};

export default CoverPhoto;