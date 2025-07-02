import React from 'react'
import "./Moats.css"
import { Row, Col } from 'react-bootstrap'

function Moats() {
    return (
        <>
            <Row>
                <Col lg={12} sm={12} md={24}>
                    <div className="Sectionpadding">
                        <div className="Moats-section-container">
                            <div className='Moats-page-img-container'>
                                <div className="section-container-moats" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
                                    <h1>MOATS</h1>
                                    <hr />
                                    <span>
                                        "moat" refers to a company's sustainable competitive advantage, like the moat
                                        surrounding a castle, protecting it from competitors.
                                    </span>
                                </div>
                                <div className="Moats-section-contant-containers">
                                    <div className='MOats-contant-container' data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <p>Smart Entry</p>
                                        <span>
                                            We begin with deep
                                            market research and
                                            data-driven insights to
                                            ensure every investment
                                            or partnership starts on a
                                            strong foundation.
                                            maximize potential.
                                        </span>
                                        <hr />
                                    </div>
                                    <div className='MOats-contant-container' data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <p>Sharp Monitoring</p>
                                        <span>
                                            Throughout the journey,
                                            we maintain rigorous
                                            oversight using advanced
                                            tools and regular
                                            performance evaluations.
                                        </span>
                                        <hr />
                                    </div>
                                    <div className='MOats-contant-container' data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <p>Strategic Entry</p>
                                        <span>
                                            We don’t just plan how to
                                            enter — we plan how to
                                            exit. Our exit strategies
                                            are carefully crafted to
                                            align with market
                                            conditions and value
                                            maximization.
                                        </span>
                                        <hr />
                                    </div>
                                </div>
                                <div className="Backgroundimg"></div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Moats
