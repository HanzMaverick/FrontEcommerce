import service_data from '@/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shape from '../../../public/assets/img/shape/1.png';

const ServiceSectionTwo = () => {
    return (
        <>
            <div className="we-do-area pt-110 pb-85">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center section-circle mb-70">
                                <div className="section-img">
                                    <Image src={shape} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                                <h1>What We Do</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut labore et dolore magna aliqua enim minim veniam</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            service_data.slice(3, 6).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="we-do-wrapper text-center mb-30">
                                        <div className="we-do-img">
                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="we-do-text">
                                            <h4><Link href="/services">{item.title}</Link></h4>
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
        </>
    );
};

export default ServiceSectionTwo;