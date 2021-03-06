import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (user) {
        navigate('/')
    }
    if (loading) {
        return <LoadSpinner></LoadSpinner>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
           
            <div>
            <Button onClick={() => signInWithGoogle()} className='w-50 d-block mx-auto text-white fw-bold' variant='dark'>Sign In with Google</Button>
            {error && <p className='text-danger'>{error.message}</p>} 
        </div>
        </div>
    );
};

export default SocialLogin;