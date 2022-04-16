import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    if (user) {
        navigate('/home')
    }
    let errorText;
    if (error || error1) {
        errorText = <p>{error?.message}</p>
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    const handleLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast("send password reset link in your email.")
        }
        else {
            toast('please enter a valid mail')
        }

    }
    return (
        <div style={{ height: '100vw' }} className='w-50 mx-auto mt-5'>
            <h2 className='mb-5'> Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{errorText}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mt-3'>New in Tourist-guide-site ? please <span> <Link className='text-decoration-none' to='/signup'>sign up</Link> </span></p>
            <p>Forget Your password? <span style={{ cursor: 'pointer' }} className='text-primary' onClick={handleResetPassword}>reset password</span></p>
            <ToastContainer />
        </div >
    );
};

export default Login;