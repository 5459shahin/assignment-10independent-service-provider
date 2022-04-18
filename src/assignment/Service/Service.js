import React from 'react';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2> Our Best Services </h2>
            <p>price : ${price}</p>
            <p><small>{description}</small></p>
            <button type="button" class="btn btn-lg btn-primary" disabled>Book {name}</button>
        </div>
    );
};

export default Service;