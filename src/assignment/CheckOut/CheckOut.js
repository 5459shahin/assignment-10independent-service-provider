import React from 'react';
import './Checkout.css'

const CheckOut = () => {
    return (
        <div>
            <form className='check-form'>
                <input type="text" name="name" id="name" placeholder='Your Name' />
                <br />
                <input type="text" name="address" id="address" placeholder='home address' required />
                <input type="number" name="number" id="number" placeholder='contact number' required />
                <input type="email" name="email" id="email" placeholder='Email' required />
                <br />
                <input type="password" name="password" id="password" placeholder='password' required />
                <input className='bg-dark text-white' type="submit" value="Confirm Submit" />
            </form>
        </div>
    );
};

export default CheckOut;