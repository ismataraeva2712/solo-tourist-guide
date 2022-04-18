import React from 'react';
import { Container, Row } from 'react-bootstrap';
import eva from '../../img/eva.jpg'
const About = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className='col-12 col-md-6 my-5'>
                        <img className='w-75 rounded-circle border-1' src={eva} alt="" />
                    </div>
                    <div className='col-12 col-md-6 my-5 '>
                        <h2>Ismat Ara Eva</h2>
                        <h5>React frontend developer</h5>
                        <div style={{ height: '1px' }} className="bg-dark w-50 me-2 mb-3"></div>
                        <p>Email: evaismat2@gmail.com</p>
                        <p>Address: k.Kashidhoo island,maldives</p>
                        <p>Phone: 96094252</p>
                        <h3>My future Goal</h3>
                        <div style={{ height: '1px' }} className="bg-dark w-50 me-2 mb-3"></div>
                        <p> I am junior web developer also i'm the fast learner,hard working person.last few months i learned html5,css3,bootstrap5,tailwind,then i learn javascript,i solve some prolem solving and row javascript learn.then i started React,i completed many project with react,react router dom,react bootstarp,react firebase authentication hooks.Now my next plan learning database,then i complete more and more project.Beacuse practice is the main key in this field and then i will make a good cv and drop my github link ,updated  my github profile and will keep many project in my github profile for the strong github profile.Then i looking job or intern or remote job,when i will searching job or intern that time i also learn backend web development.i hope one day i will be full stack web developer inshAllah.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;