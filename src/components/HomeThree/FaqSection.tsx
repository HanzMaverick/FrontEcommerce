import React from 'react';
import bgImage from '../../../public/assets/img/bg/bg13.jpg';

const FaqSection = () => {
    return (

        <div className="faq-area gray2-bg pt-105 pb-90">
            <div className="faq-img d-none d-md-block"
                style={{ backgroundImage: `url(${bgImage.src})` }}></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
                        <div className="question-collapse">
                            <div className="faq-title">
                                <h1>Free Quentily Ask <br /> Questions</h1>
                            </div>

                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5>Why Do You Eat Orange Food?</h5>
                                        </button>

                                    </div>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion__panel">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat aute irure aliquam quaerat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingTwo">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            <h5>Why Orange Food Is The Best For Health?</h5>
                                        </button>

                                    </div>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="collapseTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion__panel">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat aute irure aliquam quaerat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header" id="headingThree">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            <h5>Good Food For Good Health?</h5>
                                        </button>

                                    </div>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="collapseThree" data-bs-parent="#accordionExample">
                                        <div className="accordion__panel">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat aute irure aliquam quaerat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FaqSection;