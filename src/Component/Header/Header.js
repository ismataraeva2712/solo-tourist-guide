import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div >
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className='text-white fw-bold'>
                        <FontAwesomeIcon style={{ height: '30px' }} className='me-2 ' icon={faUmbrellaBeach} />
                        Solo-Tourist-Guide</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/home">Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/about">About</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/blog">Blog</NavLink>
                            {
                                user ? <button onClick={handleLogout} className='btn-primary fw-bold'>Log out</button> :
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/login">Login</NavLink>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;