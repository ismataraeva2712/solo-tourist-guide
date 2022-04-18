import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import './Checkout.css'

const Checkout = () => {
    const { id } = useParams()
    const handleSubmit = event => {
        event.preventDefault()
        toast("Thank you so much for your booking")

    }
    return (

        < div className='w-50 mx-auto checkout' >
            <h2 className='text-primary text-center mt-5'>Checkout </h2>
            <div className='mt-3 text-center'>
                <FontAwesomeIcon style={{ height: '60px' }} className='text-primary ' icon={faUserFriends} />
            </div>
            <Form onSubmit={handleSubmit} className='mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>phone:</Form.Label>
                    <Form.Control type="number" placeholder="Enter your contact no" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" required />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Opinion</Form.Label>
                    <Form.Control type="text" placeholder="Enter your opinion" required />
                </Form.Group>

                <Button variant="primary" type="submit" className='rounded-pill fw-bolder'>
                    <FontAwesomeIcon style={{ height: '16px' }} className='me-2 ' icon={faUserAlt} />
                    checkout  Booking
                </Button>
            </Form>
        </div >
    );
};

export default Checkout;