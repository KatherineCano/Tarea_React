// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeScreen from './pages/home/HomeScreen';
import Main from "../src/pages/main/Main";
import AboutApp from "../src/pages/about/AboutApp";
import IpDetailsScreen from "../src/pages/ipdetails/IpDetailsScreen";
import FooterInfo from './components/FooterInfo';
import './styles/global.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<AboutApp />} />
                <Route path="/ip-details" element={<IpDetailsScreen />} />
            </Routes>
            <FooterInfo />
        </Router>
    );
}

export default App;
