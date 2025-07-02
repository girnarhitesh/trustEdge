import React from 'react';
import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineArrowRight, MdLocationOn } from "react-icons/md";

function Footer() {
    return (
        <Row>
            <Col xs={12}>
                <footer className="Footer-container">
                    <div className="Footer-page-container">
                        {/* Logo Section */}
                        <div className="Footer-logo-section">
                            <Link to="/">
                                <img src="/logo/logo.png" alt="TrustEdge Company Logo" />
                            </Link>
                        </div>

                        <nav className="Footer-page-containers-content">
                            <div className="Footer-content">
                                <Link to="/">
                                    <p>
                                        <MdOutlineArrowRight />
                                        Home
                                    </p>
                                </Link>
                                <Link to="/about">
                                    <p>
                                        <MdOutlineArrowRight />
                                        About Us
                                    </p>
                                </Link>
                                <Link to="/team">
                                    <p>
                                        <MdOutlineArrowRight />
                                        Team
                                    </p>
                                </Link>
                                <Link to="/product">
                                    <p>
                                        <MdOutlineArrowRight />
                                        Products
                                    </p>
                                </Link>
                                <Link to="/contact">
                                    <p>
                                        <MdOutlineArrowRight />
                                        Contact
                                    </p>
                                </Link>
                            </div>
                        </nav>

                        {/* Address Section */}
                        <div className="Footer-content-container">
                            <a
                                href="https://www.google.com/maps/place/..."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View TrustEdge location on Google Maps"
                                class="map-link"
                            >

                                <p>
                                    <MdLocationOn style={{ fontSize: '18px', marginRight: '8px', color: '#fff' }} />
                                    TRUSTEDGE, VKG CORPORATE CENTRE,<br />
                                    6TH FLOOR, JB NAGAR,<br />
                                    ANDHERI (E),<br />
                                    MUMBAI - 400 059, INDIA
                                </p>
                            </a>
                        </div>
                    </div>
                </footer>
            </Col>
        </Row>
    );
}

export default Footer;