import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import './ServiceItem.css'
const ServiceItem = ({ serviceItem }) => {
    const { name, picture, description, price } = serviceItem
    return (
        <div className='col-12 col-md-6 col-lg-4 g-5'>

            <Card className=' shadow-sm' >
                <Card.Img style={{ height: '200px' }} className='w-100' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='fw-bold'>
                        Package Fee : per person ${price}
                    </Card.Text>
                    <Button variant="primary" className="text-white fw-bold ">Checkout</Button>
                </Card.Body>

            </Card>


        </div>
    );
};

export default ServiceItem;