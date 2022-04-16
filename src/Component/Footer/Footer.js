import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div style={{ padding: '15px' }} className='bg-primary text-white mt-5'>
            <p className='pt-3' ><small>copyright &copy; reserves by eva || {year}  </small></p>
        </div>
    );
};

export default Footer;