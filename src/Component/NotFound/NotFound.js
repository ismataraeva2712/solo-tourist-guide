import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
const NotFound = () => {
    return (
        <div style={{ height: '90vw' }} className="text-center mt-5" >
            <FontAwesomeIcon style={{ height: '100px' }} className='text-danger' icon={faCircleXmark} />
            <h2 className='text-danger text-center mt-5'>404!!! Not Found !!!</h2>
        </div >
    );
};

export default NotFound;