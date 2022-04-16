import React, { useEffect, useState } from 'react';

const useService = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [service, setService];
};

export default useService;