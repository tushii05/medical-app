import React from 'react';

const Features = () => {
    return (
        <section className="Feautes section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>We Are Always Ready to Help You &amp; Your Family</h2>
                            <img src="src/assets/images/section-img.png" alt="#" />
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        {/* Start Single features */}
                        <div className="single-features">
                            <div className="signle-icon">
                                <i className="icofont icofont-ambulance-cross" />
                            </div>
                            <h3>Emergency Help</h3>
                            <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                        </div>
                        {/* End Single features */}
                    </div>
                    <div className="col-lg-4 col-12">
                        {/* Start Single features */}
                        <div className="single-features">
                            <div className="signle-icon">
                                <i className="icofont icofont-medical-sign-alt" />
                            </div>
                            <h3>Enriched Pharmecy</h3>
                            <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                        </div>
                        {/* End Single features */}
                    </div>
                    <div className="col-lg-4 col-12">
                        {/* Start Single features */}
                        <div className="single-features last">
                            <div className="signle-icon">
                                <i className="icofont icofont-stethoscope" />
                            </div>
                            <h3>Medical Treatment</h3>
                            <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                        </div>
                        {/* End Single features */}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Features;
