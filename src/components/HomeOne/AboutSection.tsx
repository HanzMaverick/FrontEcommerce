import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aboutImg from '../../../public/assets/img/about/1.png';
import aboutImg2 from '../../../public/assets/img/bg/about.png';

const AboutSection = () => {
    return (
        <div className="about-us-area pt-115 pb-90" style={{ backgroundImage: `url(${aboutImg2.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-us-img mb-30">
                            <Image src={aboutImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 ">
                        <div className="about-us-text mb-30">
                            <h1>Bienvenido a <br /> Whack Healthy</h1>
                            <span>Con amor y dedicación</span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque.
                            </p>
                            <Link href="/about" className="btn">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
