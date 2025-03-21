import React from 'react';

const FunCode = () => {
    return (
        <div id="fun-facts" className="fun-facts section overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-fun">
                            <i className="icofont icofont-home" />
                            <div className="content">
                                <span className="counter">3468</span>
                                <p>Hospital Rooms</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-fun">
                            <i className="icofont icofont-user-alt-3" />
                            <div className="content">
                                <span className="counter">557</span>
                                <p>Specialist Doctors</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-fun">
                            <i className="icofont-simple-smile" />
                            <div className="content">
                                <span className="counter">4379</span>
                                <p>Happy Patients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-fun">
                            <i className="icofont icofont-table" />
                            <div className="content">
                                <span className="counter">32</span>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FunCode;
