import React from 'react';

import { Carousel, Container, Row } from 'react-bootstrap';
import sea2 from '../../img/sea2.jpg'
import hill1 from '../../img/hill1.jpg'
import sea1 from '../../img/sea1.jpg'
import useService from '../../Hooks/useService';
import ServiceItem from '../ServiceItem/ServiceItem';
const Home = () => {

    const [service, setService] = useService()
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src={sea2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Tourist-Guide-Site with Foreign trip</h3>
                        <p>Evrey year I arrange 3 Foreign trip   </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src={sea1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Tourist-Guide-Site with Deshi Sea trip</h3>
                        <p>Available package for sea trip</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src={hill1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Tourist-Guide-Site with Deshi Hill trip</h3>
                        <p>Raniy season and winter season i provide some hill trip package</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <h2 className='text-primary mt-5 text-center'>Tour package service</h2>
                <Container>
                    <Row>
                        {
                            service.map(serviceItem => <ServiceItem
                                key={serviceItem.id}
                                serviceItem={serviceItem}

                            ></ServiceItem>)
                        }
                    </Row>
                </Container>


            </div>



        </div>
    );
};

export default Home;