// src/components/IpDisplayCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IpDisplayCard = () => {
    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        const fetchIpAddress = async () => {
            try {
                const response = await axios.get('https://api.ipify.org?format=json');
                setIpAddress(response.data.ip);
            } catch (error) {
                console.error("Error al obtener la IP:", error);
            }
        };
        fetchIpAddress();
    }, []);

    return (
        <div className="ip-card">
            <h2>Tu IP Pública</h2>
            <p>{ipAddress || 'Cargando...'}</p>
        </div>
    );
};

export default IpDisplayCard;
