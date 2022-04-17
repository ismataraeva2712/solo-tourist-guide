import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Event = ({ event }) => {
    const navigate = useNavigate()
    const { name, description, picture, price, date } = event
    return (
        <div className='col-12 col-md-6 col-lg-4 g-5'>

            <Card className=' shadow-sm' >
                <Card.Img style={{ height: '200px' }} className='w-100' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <Card.Text className='fw-bolder'>
                        Date and time : {date}
                    </Card.Text>
                    <Card.Text className='fw-bolder'>
                        Package Fee : per person ${price}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    <Button onClick={() => navigate('/checkout')} variant="primary" className="text-white fw-bold rounded-pill px-3 ">Booking</Button>
                </Card.Body>

            </Card>


        </div>
    );
};

export default Event;