import React from 'react';
import './Fooder.css'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div style={{ padding: '3px' }} className='bg-primary text-white mt-5 text-center my-footer'>
            <p className='pt-3' ><small>copyright &copy; reserves by eva || {year}  </small></p>
        </div>
    );
};

export default Footer;