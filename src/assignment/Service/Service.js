import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    

    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
           navigate(`/service/${id}`)
    }

    return (
        <div>
            <img src={img} alt="" />
            <h2> Our Best Services </h2>
            <p>price : ${price}</p>
            <p><small>{description}</small></p>
            
           
            <Link className='btn btn-info w-50 p-0' as={Link} to="/checkout">CheckOut</Link>
        </div>
    );
};

export default Service;