import Image from 'next/image';
import React from 'react';
import ServiceBg from '../../../public/assets/img/bg/4.png';

const ServiceAboutSection = () => {
    return (
        <div className="zomata-area pt-120 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 cl-md-6">
                        <div className="zomata-img mb-30">
                            <Image src={ServiceBg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 cl-md-6">
                        <div className="zomata-wrapper mb-30">
                            <div className="zomata-text">
                                <h1>
                                    Zomata Organic <br /> Going Green
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim
                                    id est laborum. Sed ut perspiciatis unde
                                    omnis iste natus error sit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAboutSection;