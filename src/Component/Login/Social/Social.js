import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../img/google.png'
import github from '../../../img/github.png'
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user || user1) {
        navigate(from, { replace: true });
    }
    let errorText;
    if (error || error1) {
        errorText = <p>{error?.message}</p>
    }
    return (
        <div className=' '>
            <div className='d-flex justify-content-center align-items-center '>
                <div style={{ height: '1px' }} className="bg-primary w-50 me-2"></div>
                <div>or</div>
                <div style={{ height: '1px' }} className="bg-primary w-50 ms-2"></div>



            </div>
            <div>
                <p className='text-danger'>{errorText}</p>
                <button onClick={() => signInWithGoogle()} className='border-0 w-75 p-1 rounded-pill'> <img style={{ height: '30px' }}
                    src={google} alt="" /> <span className='fw-bolder text-primary'>Google Sign In</span> </button>
                <button onClick={() => signInWithGithub()} className='border-0 w-75 p-1 rounded-pill mt-3'> <img style={{ height: '30px' }}
                    src={github} alt="" /> <span className='fw-bolder text-primary'>Github Sign In</span> </button>
            </div>
        </div>
    );
};

export default Social;