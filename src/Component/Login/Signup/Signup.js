import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Social from '../Social/Social';
const Signup = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [permission, setPermission] = useState(false)


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    if (user) {
        console.log(user)
    }
    let errorText;
    if (error || error1) {
        errorText = <p>{error?.message}</p>
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleSignup = async (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        toast("send email verification mail and updated profile.")
        navigate('/home')

    }




    return (
        <div style={{ height: '200vw' }} className='w-50 mx-auto mt-5'>
            <h2 className='mb-5 text-primary'> Please Sign-up</h2>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setPermission(!permission)} type="checkbox" label="Are you agree to Solo-Tourist-Guide  terms and condition?" />
                </Form.Group>
                <p className='text-danger'>{errorText}</p>
                <Button disabled={!permission} variant="primary" type="submit" className='rounded-pill px-5 fw-bolder fs-6'>
                    Sign up
                </Button>

            </Form>
            <ToastContainer />
            <p className='mt-3'>Allready have an account ? please <span> <Link className='text-decoration-none' to='/login'>login</Link> </span></p>
            <Social></Social>
        </div>
    );
};

export default Signup;