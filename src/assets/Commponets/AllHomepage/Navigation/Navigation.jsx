import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigationitem from './Navigationitem';
import { IoMenu } from "react-icons/io5";

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navWrapper = document.querySelector('.Navigation-wrapper');
            if (navWrapper && !navWrapper.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    // Close menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="Navigation-wrapper">
            <Container className='Navigation-container'>
                <div className="Navigation-bar">
                    <div className="Navigation-logo">
                        <Link to="/" onClick={closeMenu}>
                            <img src="./public/logo/logo.png" alt="Logo"  />
                        </Link>
                    </div>
                    
                    <div className={`Navigation-links ${menuOpen ? 'open' : ''}`}>
                        {Navigationitem.map((item, index) => (
                            <Link 
                                key={index} 
                                to={item.path}  
                                className="nav-link-item" 
                                onClick={closeMenu}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    
                    <div className="navigation-menu" onClick={toggleMenu}>
                        <span><IoMenu /></span>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Navigation;