import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div style={{ height: '100vw' }}>
            <Container>
                <h4 className='mt-5 text-primary'>1. Difference between authentication and authorization?</h4>
                <p>
                    # Authentication checks the persom's identity to grant access to the system . Authorization checks the person's permission to access the resource.
                    <br />
                    # Authentication is verifying user credentials . Authorization is validating the user permissions.
                    <br />
                    # Authentication process perform start at the very first step. Authorization process perform start usually after authentication.
                </p>
                <h4 className=' text-primary'>2 Why are you using firebase? What other options do you have to implement authentication?</h4>
            </Container>
        </div>
    );
};

export default Blog;