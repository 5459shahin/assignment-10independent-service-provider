import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { name, img, description, price} = service;
    

    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2> {name} </h2>
            <p>price : ${price}</p>
            <p><small>{description}</small></p>
            
           
            <Link className='btn btn-dark w-100 pt-1  check-out-btn ' as={Link} to="/checkout">CheckOut</Link>
        </div>
    );
};

export default Service;