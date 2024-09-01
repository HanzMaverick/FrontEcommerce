import Link from 'next/link';
import React from 'react';
import futureBg from '../../../public/assets/img/bg/bg1.jpg';
import futureBgOne from '../../../public/assets/img/shape/1.png';
import Image from 'next/image';
import service_data from '@/data/service-data';

const FutureSection = () => {
    return (
        <div className="features-area pt-110 pb-90" style={{ backgroundImage: `url(${futureBg.src})` }}>
            <div className="container">
                <div className="row">

                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={futureBgOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
                            </div>
                            <h1>Our Features</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut
                                labore et dolore magna aliqua enim minim veniam
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        service_data.slice(0, 3).map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <div className="features-wrapper text-center mb-30">
                                    <div className="features-img">
                                        <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                    <div className="features-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <Link href="/services">
                                            Read More <i className="dripicons-arrow-thin-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FutureSection;