import React from 'react';
import './team.css';
import { Row, Col } from 'react-bootstrap';

function Team() {
    const teamitem = [
        {
            img: "/team/img1.png", // ✅ Correct public path
            title: "23+ Years of Experience in Banking, Advisory & Independent Directorship at listed entity with expertise in Business Development, Structured Debt & Loan Syndication.",
            Description: "Indusind Bank - Head SME and Executive Vice President / Ex ICICI / Ex Yes Bank / Career SME Banker / SME Speaker / Chartered Accountant"
        },
        {
            img: "/team/img2.png",
            title: "Seasoned Banker with 25+ Years of Experience in Relationship, Credit & Product Management roles with banks in segments like Corporate & SME, Supply Chain Finance & Trade Finance.",
            Description: "IndusInd Bank SVP & Business Head - South SME), Development Bank of Singapore, Ex. Barclays, ICICI, Ex. M&M & Chartered Accountant."
        },
        {
            img: "/team/img3.png",
            title: "Experienced Banking Professional with 15+ Years in SME, FX & Trade Sales with focus in Business Development & Team Management.",
            Description: "IndusInd Bank (SVP & Business Head Mumbai), Ex ICICI / Ex Yes Bank"
        }
    ];

    return (
        <>
            <Row>
                <Col lg={12} sm={12} md={24}>
                    <div className="Sectionpadding" style={{ background: "white" }}>
                        <div className="team-page-container">
                            <div className="team-container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <h1>Leadership Team</h1>
                                <hr />
                                {teamitem.map((item, index) => (
                                    <div className='Teamitem-section-container' key={index}>
                                        <div className="team-section-container">
                                            <img src={item.img} alt={`team-${index}`} />
                                        </div>
                                        <div className="team-contant-container">
                                            <p>{item.title}</p><br />
                                            <span>{item.Description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <Slider {...settings} className="team-slider">
                                    {teamitem.map((item, index) => (
                                        <div className='team-slider-comtainer'>
                                            <div key={index} className="team-img-container">
                                                <img src={item.img} alt={`team-${index}`} />
                                            </div>
                                            <div className="Team-img-container-contact">
                                                <h2>{item.title}</h2>
                                                <p>{item.Description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Slider> */}

        </>
    );
}

export default Team;