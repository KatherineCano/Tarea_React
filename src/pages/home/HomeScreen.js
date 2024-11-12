// src/pages/home/HomeScreen.js
import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <HeaderBanner />
            <Link to="/ip-details" className="navigate-button">Mostrar IP</Link>
        </div>
    );
};

export default HomeScreen;
