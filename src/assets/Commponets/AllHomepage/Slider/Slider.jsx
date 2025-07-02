import React from 'react';
import './Slider.css'; // Import the CSS file

function Slider() {
    const slideritem = [
        {
            title: "The AERL USP",
            Description: [
                "Quick turnaround time (TAT) with speed and accuracy.",
                "Thorough checks on financials, operations and promoter backgrounds.",
                "Our fast disbursement process positions us as opportunity capital providers for borrowers needing urgent funding.",
                "Especially valuable for clients looking to meet working capital margin requirements on short notice.",
                "Strategy is to empower good companies not only as lenders but also as growth enablers.",
                "Technology-backed underwriting, in turn backed by strong ground intelligence built by decades of hardcore on-ground experience."
            ],
            icon: "⚡"
        },
        {
            title: "The AERL Strategy for Borrower Selection",
            Description: [
                "Good companies with high growth potential with existing banking limits.",
                "Thematic selection approach that aligns with sectors/companies/industries showing resilience to market ups and down and poised to grow faster.",
                "Strong promoter relationship: Long-standing ties with promoters provide trust in business, integrity and responsible fund usage.",
                "Exposure of AERL will not exceed 15% of overall banking limits of the borrower.",
                "Borrowers with satisfactory credit track record with existing banks/FIs.",
                "Reference checks are obtained from both buyers, suppliers & also peers of the borrowers.",
                "AERL scorecard rating metrics out of 100."
            ],
            icon: "🎯"
        },
        {
            title: "Pre-Lending Due Diligence",
            Description: [
                "Business Analysis: Vintage, Business Model, Customer-Supplier Analysis, etc.",
                "Management & Ownership: Background, Experience, Net-Worth, Credit Checks, etc.",
                "Financial Assessment: Turnover Trend, Profitability, Ratio Analysis, Loan Repayment Ability, etc.",
                "Additional Checks: External Rating, Statutory Compliance, etc.",
                "Legal & Regulatory Checks: NCLT, DRT, MCA checks, etc.",
                "Collateral & Guarantees (can be explored wherever possible)",
                "Market Assessment: Reference checks from customer, suppliers, peers, banks, etc.",
                "Risk Mitigation Strategies: Diversified portfolio and exposure rationing."
            ],
            icon: "🔍"
        },
        {
            title: "Post-Lending Due Diligence",
            Description: [
                "Loan Repayment Monitoring: Timely Payment of Principal & Interest.",
                "Bank Statement Analysis: Regularity of credits from customers, Other EMI/Cheque Bounces, etc.",
                "Business & Management Updates: Change in Management, Shareholding, Business Model, etc.",
                "Covenant Monitoring: Timely monitoring of any stipulated covenant.",
                "Call Reports: Regular Meetings / Unit Visits, etc.",
                "Risk Mitigation & Exit Strategy: Exploring Additional Collateral/ PG/CG, En-cashing UDC/PDC, Legal Notices, etc.",
                "Additional Checks: Google Alerts, Social Media, Search Engines (For Negative Market News)"
            ],
            icon: "📊"
        }
    ];

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

    React.useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideritem.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slideritem.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slideritem.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slideritem.length) % slideritem.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    return (
        <>
            <div className="Sectionpadding" style={{ background: "white" }}>
                <div className="slider-container">
                    <div className="slider-wrapper">
                        <div className="slider-header">
                            <h2 className="slider-title">
                                Our Process Excellence
                            </h2>
                            <div className="slider-divider"></div>
                            <p className="slider-subtitle">
                                Comprehensive approach to lending with rigorous due diligence and strategic selection
                            </p>
                        </div>

                        <div className="slider-main">
                            <div className="slider-track">
                                <div
                                    className="slider-content"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {slideritem.map((item, index) => (
                                        <div key={index} className="slide">
                                            <div className={`slide-border ${item.borderClass}`}>
                                                <div className="slide-inner">
                                                    <div className="slide-header">
                                                        <div className="slide-icon">
                                                            {item.icon}
                                                        </div>
                                                        <h3 className="slide-title">
                                                            {item.title}
                                                        </h3>
                                                    </div>

                                                    <div className="slide-content">
                                                        <ul className="slide-list">
                                                            {item.Description.map((desc, descIndex) => (
                                                                <li key={descIndex} className="slide-list-item">
                                                                    <div className="slide-bullet"></div>
                                                                    <span className="slide-text">
                                                                        {desc}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button onClick={prevSlide} className="nav-button prev">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button onClick={nextSlide} className="nav-button next">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;