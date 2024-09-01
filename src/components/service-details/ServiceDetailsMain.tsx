import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import serviceBg from '../../../public/assets/img/service/service-details/4.jpg';
import serviceShape from '../../../public/assets/img/service/service-details/shape.png';
import bannerImage from '../../../public/assets/img/service/service-details/banner.jpg';
import Image from 'next/image';
import Link from 'next/link';
import ServiceCategory from './ServiceCategory';
import ServiceDetailsContent from './ServiceDetailsContent';
import PricingSection from '../service/PricingSection';
import BrandSection from '../Elements/brand/BrandSection';
import { idType } from '@/interFace/interFace';
import service_data from '@/data/service-data';

const ServiceDetailsMain = ({ id }: idType) => {
    const serviceData: any = service_data.find((item) => item.id == id)
    return (
        <>
            <Breadcrumb title='Service Details' subTitle='Service Details' />
            <div className="services-details-area pt-120 pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-30">
                            <div className="services-sidebar mb-60"
                                style={{ backgroundImage: `url(${serviceBg.src})` }}>
                                <div className="services-title">
                                    <h1>Services</h1>
                                    <div className="servicest-t-img">
                                        <Image src={serviceShape} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                </div>
                                <ServiceCategory />
                            </div>
                            <div className="services-sidebar mb-60"
                                style={{ backgroundImage: `url(${'assets/img/service/service-details/5.jpg'})` }}>
                                <div className="services-title">
                                    <h1>Downloads</h1>
                                    <div className="servicest-t-img">
                                        <Image src={serviceShape} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                </div>
                                <ul className="services-link">
                                    <li><Link href="#"><i className="far fa-file-word"></i>Presentation pdf</Link></li>
                                    <li><Link href="#"><i className="far fa-file-word"></i>Wordfile.doc</Link></li>
                                </ul>
                            </div>
                            <div className="services-sidebar servicess-sidebar p-0">
                                <div className="services-banner">
                                    <Link href="#">
                                        <Image src={bannerImage} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 mb-30">
                            <ServiceDetailsContent serviceData={serviceData} />
                        </div>
                    </div>
                </div>
            </div>
            <PricingSection />
            <BrandSection />
        </>
    );
};

export default ServiceDetailsMain;