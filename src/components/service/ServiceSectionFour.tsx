import service_data from '@/data/service-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceSectionFour = () => {
    return (
        <div className="services-area pb-60">
            <div className="container">
                <div className="row">
                    {
                        service_data.slice(15, 21).map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <div className="services-wrapper single-services mb-60">
                                    <div className="services-img">
                                        <Link href={`/services-details/${item.id}`}>
                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        </Link>
                                    </div>
                                    <div className="services-text text-center">
                                        <h3><Link href={`/services-details/${item.id}`}>Blackcurrant Vegetables </Link>
                                        </h3>
                                        <p>{item.desc}</p>
                                        <Link href={`/services-details/${item.id}`}>
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

export default ServiceSectionFour;