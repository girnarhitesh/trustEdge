import React from 'react';
import "./Mission.css";
import { Row, Col } from 'react-bootstrap';
import { LuBoxes } from "react-icons/lu";
import { IoIosRocket } from "react-icons/io";

function Mission() {
    const missionitem = [
        {
            icon: <LuBoxes size={60} color="#12426c" />,
            title: "To empower businesses with seamless access to timely and flexible financing, ensuring they can seize opportunities without delay."
        },
        {
            icon: <IoIosRocket size={60} color="#12426c" />,
            title: "By leveraging innovation, efficiency, tech support and a customer-centric approach, we provide tailored financial solutions that fuel growth, stability, and success."
        },
    ];

    return (
        <Row>
            <Col lg={12} sm={16} md={24}>
                <div className="Sectionpadding" style={{background:"white"}}>
                    <div className="mission-section-container">
                        <div className="Mission-contant-container" >
                            <h1 data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">Company Mission</h1>
                            <hr />
                            <p data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">
                                We empower businesses with timely, flexible financing solutions tailored to their needs.
                                Through innovation, efficiency, and a customer-first approach, we help them seize opportunities
                                and drive sustainable growth.
                            </p>
                        </div>
                        <Col lg={12} sm={16} md={24}>
                            <div className="mission-img-box-container" data-aos="fade-up"
                                data-aos-duration="5000">
                                {missionitem.map((item, index) => (
                                    <div key={index} className="img-container-mission">
                                        <span>{item.icon}</span>
                                        <hr />
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Mission;