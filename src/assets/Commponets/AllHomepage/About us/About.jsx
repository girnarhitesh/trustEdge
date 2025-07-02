import React, { useEffect } from 'react'
import "./About.css"
import { Row, Col } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mission from '../Mission/Mission';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <>
            <Row>
                <Col lg={12} sm={16} md={24}>
                    <div className="Sectionpadding">
                        <div className="About-section-container">
                            <div className="About-section-contant-container">
                                <h1 data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">About Us</h1>
                                <hr data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" />
                                <p data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    The company was incorporated as Adinath
                                    Exim Resources Ltd. on January 20,1995 with
                                    Registration No. 04-24300, registered with the
                                    Registrar of Companies, Gujarat, Dadra &
                                    Nagar Haveli and obtained the Certificate of
                                    Commencement of Business on January
                                    25,1995.</p>
                                <span data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    The Company was originally incorporated with
                                    the object of acting as merchant exporter. As a
                                    part of the strategic decision, the Company
                                    commenced Non-Banking Financial activities.</span>
                            </div>
                            <div className="About-section-img-container" data-aos="fade-left">
                                <img src="https://plus.unsplash.com/premium_photo-1683134361837-3a99d74372e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJ1c2luZXNzfGVufDB8fDB8fHww" alt="" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Mission />

        </>
    )
}

export default About
