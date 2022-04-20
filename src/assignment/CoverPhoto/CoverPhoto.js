import React from 'react';
import cover from '../../images/banner (2).jpg'
import './cover-photo.css';

const CoverPhoto = () => {
    return (
        <div>
            
              <img  className='cover-photo' src={cover} alt="..."/>  
        </div>
    );
};

export default CoverPhoto;