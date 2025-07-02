import React, { useState } from 'react';
import './Contact.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FcBusinessContact } from "react-icons/fc";


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Optional: Reset the form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <>
            <Row>
                <Col lg={12} sm={16} md={24}>
                    <div className="contact-container">
                        <div className="left-site-contact-form">
                            <div className="img-overlay"></div>
                            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D" alt="Contact" />
                        </div>
                        <div className="right-site-contact-form">
                            <div className="contact-section-container">
                                <h2 className="contact-title">Contact Us</h2>
                                <Form onSubmit={handleSubmit} className="contact-form">
                                    <Form.Group controlId="formName">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formEmail">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formSubject">
                                        <Form.Control
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formMessage">
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            required
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="contact-submit-btn">
                                        {/* <FcBusinessContact className='contact-icone' />  */}
                                         Send Message
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Contact;