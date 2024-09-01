import Image from 'next/image';
import React from 'react';
import imgOne from '../../../public/assets/img/shape/why-shape.png';
import imgTwo from '../../../public/assets/img/choose/01.jpg';
import icon1 from '../../../public/assets/img/icon/1.png';
import icon2 from '../../../public/assets/img/icon/2.png';
import icon3 from '../../../public/assets/img/icon/3.png';


const ChooseUsSection = () => {
    return (
        <div className="choose-us-area pt-100 pb-70 pos-relative">
            <div className="shape spahe2 bounce-animate">
                <Image src={imgOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-12">
                        <div className="choose-img mb-30">
                            <Image src={imgTwo} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-12">
                        <div className="choose-wrapper mb-30">
                            <div className="choose-section">
                                <h1>Why Choose Us</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing eliseei ustempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim minim veniam quis nostrud exercitation.
                                </p>
                            </div>
                            <div className="choose-content mb-40">
                                <div className="choose-us-img">
                                    <Image src={icon1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="choose-text">
                                    <h4>Natural Process</h4>
                                    <p>
                                        Sorem ipsum dolor sit amet consecta dipisicing elit sed do eiusmod tempor
                                        incidide.
                                    </p>
                                </div>
                            </div>
                            <div className="choose-content mb-40">
                                <div className="choose-us-img">
                                    <Image src={icon2} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="choose-text">
                                    <h4>100% Organic Products</h4>
                                    <p>
                                        Sorem ipsum dolor sit amet consecta dipisicing elit sed do eiusmod tempor
                                        incidide.
                                    </p>
                                </div>
                            </div>
                            <div className="choose-content">
                                <div className="choose-us-img">
                                    <Image src={icon3} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="choose-text">
                                    <h4>Homegrown Goodness</h4>
                                    <p>
                                        Sorem ipsum dolor sit amet consecta dipisicing elit sed do eiusmod tempor
                                        incidide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsSection;