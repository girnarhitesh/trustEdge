import React from 'react'
import "./Products.css"
import { Col, Row } from 'react-bootstrap'


function Product() {

    return (
        <>
            <Row>
                <Col lg={12} sm={16} md={24}>
                    <div className="Sectionpadding" style={{ background: "white" }}>
                        <div className="Products-page-container">
                            <div className="Products-img-container-section" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEJVU0lORVNTfGVufDB8fDB8fHww"
                                    alt="Business"
                                />
                            </div>
                            <div className="Products-container-section" data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500">
                                <h1>Business Loan (BL)</h1>
                                <span><b>Purpose:-</b> Business expansion, working capital, equipment purchase & margin funding.</span><br />
                                <span><b>Target Market:-</b> Businesses (with already existing banking limits) needing immediate funding to manage short term obligations.</span><br />
                                <span><b>Risk Mitigation:-</b> Our exposure in these businesses won’t exceed 15% of their existing banking limits.</span><br />
                                <span><b>Credit Scoring Model & Eligibility :-</b> Business credit worthiness assessment using CIBIL/CRIF score & in-house Score Card Rating model. Impetus will be on use of fintech database & decisioning MIS to arrive at correct credit decisioning.</span>
                            </div>
                        </div>
                        <br />
                        <Col lg={12} sm={16} md={24}>
                            <div className="Products-page-container-2">
                                <div className="Products-container-2" data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" >
                                    <h1>Supply Chain Financing (SCF)</h1>
                                    <ul>
                                        <li>Anchor Based Dealer / Suppliers Finance</li>
                                        <li>Purpose: Short-term working capital finance to optimize cash
                                            flows & support to unlock trapped liquidity.</li>
                                        <li>Target: Businesses requiring funds for their working capital.</li>
                                        <li>Tenure: 30-180 days</li>
                                        <li>Anchors : Typically, Mid Sized Enterprises which look
                                            forward to reduce their Receivables & Payables by freeing
                                            up trapped cash flows & help drive business productivity.</li>
                                        <li>Dealer / Suppliers : They Buy/Supply goods from/to the
                                            Anchor & look forward to gain access to short term liquidity
                                            quickly in turn inducing cost reduction & efficiency in their
                                            daily operations.</li>
                                        <li>AERL USP : Simplified Documentation, Scalability & Quick
                                            Disbursal.</li>
                                    </ul>
                                </div>
                                <div className="Products-img-container-2" data-aos="fade-left">
                                    <img src="https://images.unsplash.com/photo-1560250056-07ba64664864?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxCVVNJTkVTU3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>
                            </div>
                        </Col>


                        {/* <div className="Sectionpadding"> */}
                        <div className="Products-3-section-container">
                            <Row className="align-items-center Products-3-container">
                                <Col lg={12} md={16} sm={24}>
                                    <div className="Products-img-contnat-container" data-aos="fade-up-right">
                                        <img src="./public/team/Products.png" alt="Strategy" />
                                    </div>
                                </Col>
                                <Col lg={12} md={16} sm={24}>
                                    <div className="Products-3-contnant-container" data-aos="fade-left">
                                        <h1>YEAR AUM STRATEGY</h1>
                                        <p>
                                            <b>TARGET MARKET:</b> SME’s & MID SIZED ENTERPRISES <br />
                                            India’s GDP reached $4.3 trillion in 2025, doubling in a decade with a 105% rise surpassing global growth rates.
                                        </p>
                                        <p>
                                            India’s MSME loan portfolio witnessed a 17.8% growth, reaching Rs 64.1 trillion by March 2024.
                                        </p>
                                        <p>
                                            Over 6.5 Cr MSME’s in India contribute ~45% of manufacturing output, 40% of exports, and 28% of GDP, employing 11.1 Cr people.
                                        </p>
                                        <ul>
                                            <li style={{ listStyle: "none" }}>Funding Plan of Action in FY 2026</li>
                                            <li>1st round of equity funding of ₹50 crores before Sep’25.</li>
                                            <li>Raise ₹100 crores in FY 2026 to meet AUM targets and boost sustainable growth.</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* </div> */}
                    </div>
                </Col>
            </Row >
        </>
    )
}

export default Product;