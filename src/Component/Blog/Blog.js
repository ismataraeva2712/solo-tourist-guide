import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardQuestion } from '@fortawesome/free-solid-svg-icons'
const Blog = () => {
    return (
        <div>
            <div className='w-75 mx-auto'>
                <div className='text-center mt-3'>
                    <FontAwesomeIcon style={{ height: '100px' }} className='me-2 text-primary ' icon={faClipboardQuestion} />
                </div>
                <h4 className='mt-5 text-primary'>1. Difference between authentication and authorization?</h4>
                <p>
                    # Authentication checks the persom's identity to grant access to the system . Authorization checks the person's permission to access the resource.
                    <br />
                    # Authentication is verifying user credentials . Authorization is validating the user permissions.
                    <br />
                    # Authentication process perform start at the very first step. Authorization process perform start usually after authentication.
                </p>
                <h4 className=' text-primary'>2 Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>I am  Using firebase  for authentication.Firebase authentication system has many methods as like email-password method,google sign in method,facebook sign in method,github sign in method etc.so i think to build authintication system in my website then firebase is the best option.
                    <br />
                    Others authentication platforms:-
                    <br />
                    1.Amazone cognito
                    <br />
                    2.oneLogin
                    <br />
                    3. okta
                    <br />
                    4. stytch
                    <br />
                    5.ory
                    <br />
                    6.supabase
                    <br />
                    7.pingldentity
                    <br />
                    8.keyloak
                    <br />
                    9.frontegg
                    <br />

                    10.Authress
                    <br />
                    11.Auth0.
                </p>
                <h4 className=' text-primary'>3 What other services does firebase provide other than authentication</h4>
                <p>
                    Firebase  provides functionalities and help backend development of
                    build three platform  ios,android,web .
                    <br />
                    Firebase service functionalities are :
                    <br />
                    firebase provide two typs of database. one is real time database and firebase cloud firestore. both of this real time savers.Realtime database stores data in a JSON onject and provide it all connected clients in the realtime.Firebase cloud firestore save data in documents and collection.Both are flexible.Firebase cloud messaging used to send notification. Its also using for hosting.if you deploy your project in the live site then firebase is the easiest option. evenly you can use custom domain for hosting  in firbase.

                </p>

            </div>
        </div>
    );
};

export default Blog;