import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const navigate = useNavigate();

    const navigateLogin =() =>{
        navigate('/login');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(event.target.email.value);

    }
    return (
        <div className='register-form'>
            <h2 className='text-center m-5'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="email" placeholder='Email' required />
                <br />
                <input type="password" name="password" id="password" placeholder='password' required />
                <input type="submit" value="Register" />
            </form>

            <p> Already Have a Account? <Link to="/login" className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}>Please Log In</Link></p>
        </div>
    );
};

export default Register;