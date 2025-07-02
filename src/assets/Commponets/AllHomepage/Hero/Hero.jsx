import React, { useState, useEffect } from 'react';
import "./Hero.css";
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";



const slides = [
    {
        image: "https://plus.unsplash.com/premium_photo-1682431786263-d43d5264018a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxCVVNJTkVTU3xlbnwwfHwwfHx8MA%3D%3D",
        title: "NEW BUSINESS OPPORTUNITY",
        description: "JUNE 2025"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1723485835509-f1aecb75f90c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxCVVNJTkVTU3xlbnwwfHwwfHx8MA%3D%3D",
        title: "SUPPLY CHAIN INNOVATION",
        description: "SME Financing Strategy"
    },
    {
        image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxCVVNJTkVTU3xlbnwwfHwwfHx8MA%3D%3D",
        title: "GROWTH THROUGH TECHNOLOGY",
        description: "Modern Fintech Infrastructure"
    },
    {
        image: "https://images.unsplash.com/photo-1616587656977-ac36a5a430bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDQzfHxCVVNJTkVTU3xlbnwwfHwwfHx8MA%3D%3D",
        title: "RISK-FREE LENDING",
        description: "Due Diligence Enabled Success"
    }
];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];


    useEffect(() => {
        AOS.init({ once: false });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [currentSlide]);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Row>
            <Col lg={12} sm={12} md={12}>
                <div className="Hero-section-container">
                    <div
                        className="hero-section-container-img"
                        style={{ backgroundImage: `url(${currentSlide.image})` }}
                    >
                        <div className="Hero-section-contant-container" key={currentIndex}>
                            <div className="Hero-section-contant">
                                <h1 data-aos="fade-up" data-aos-duration="3000">{currentSlide.title}</h1>
                                <p data-aos="fade-up" data-aos-duration="3000">{currentSlide.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={12} sm={16} md={24}>
                <div className="Sectionpadding" style={{ background: 'white' }}>
                    <div className="Hero-section-About-container">
                        <div className="section-About-contant">
                            <h2 data-aos="fade-up">About This Opportunity</h2>
                            <p data-aos="fade-up" data-aos-delay="200">
                                This opportunity represents a bold step into the evolving business landscape of 2025. With strategic focus on SMEs and high-growth sectors, our initiative is designed to empower emerging enterprises with the capital, expertise, and flexibility they need to thrive.</p>
                        </div>
                        <div className="About-buttons-hero-section">
                            <Link to="/about"><button data-aos="fade-up" data-aos-duration="3000">
                                About us <span className="About-icon"><MdOutlineArrowForwardIos /></span>
                            </button></Link>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Hero;