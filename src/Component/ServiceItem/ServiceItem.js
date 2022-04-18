import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ServiceItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
const ServiceItem = ({ serviceItem }) => {
    const navigate = useNavigate()
    const { name, picture, description, price, id } = serviceItem
    return (
        <div className='col-12 col-md-6 col-lg-4 g-5'>

            <Card className='shadow-sm' >
                <Card.Img style={{ height: '200px' }} className='w-100' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='fw-bold'>
                        Package Fee : per person ${price}
                    </Card.Text>
                    <Button onClick={() => navigate(`/checkout/${id}`)} variant="primary" className="text-white fw-bold rounded-pill px-3 ">  <FontAwesomeIcon style={{ height: '' }} className='' icon={faArrowRightLong} /> Checkout</Button>
                </Card.Body>

            </Card>


        </div>
    );
};

export default ServiceItem;