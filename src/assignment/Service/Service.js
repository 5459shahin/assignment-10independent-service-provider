import React from 'react';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>This is Service : {name}</h2>
            <p>price : ${price}</p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Service;