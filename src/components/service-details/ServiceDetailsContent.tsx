import Image from 'next/image';
import React from 'react';
import DetailsImg from '../../../public/assets/img/service/service-details/1.jpg';
import DetailsImg2 from '../../../public/assets/img/service/service-details/6.jpg';
import { useGetServicesID } from '../../../api/getServiceID';
import { serviceType } from '@/interFace/interFace';

const ServiceDetailsContent = ({ serviceData }: any) => {
    return (
        <div className="services-details-wrapper">
            <div className="services-details-img mb-50">
                {
                    serviceData ?
                        <Image src={serviceData.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        :
                        <Image src={DetailsImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                }
            </div>
            <div className="services-details-text">
                <h1>{serviceData ? serviceData.title : "Organic Vegetables"}</h1>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete account of the system, and
                    expound the actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again
                    is there anyone who loves or pursues or desires to obtain pain of itself,
                    because it is pain, but because occasionally circumstances occur in which toil
                    and pain can procure him some great pleasure. To take a trivial example, which
                    of us ever undertakes laborious physical exercise, except to obtain some
                    advantage from it? But who has any right to find fault with a man who chooses to
                    enjoy a pleasure that has no annoying consequences, or one who avoids a pain
                    that produces no resultant pleasure</p>
            </div>
            <div className="services-details-info"
                style={{ backgroundImage: `url(${DetailsImg2.src})` }}>
                <p>Sorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam voluptatem
                    quia. </p>
            </div>
            {/* <div className="services-details-text mb-35">
                <h1>Why Needs Organic Food For Health</h1>
                <p>No one rejects dislikes or avoids pleasure itself because it is pleasure but
                    because those who do not know how to pursue pleasure rationally encounter
                    consequences that are extremely painful. Nor again is there anyone who loves or
                    pursues desires to obtain pain of itself because it is pain, but because
                    occasionally.</p>
            </div>
            <ServiceContent />
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="services2-img mb-30">
                        <Image src={DetailsImg3} style={{ width: "100%", height: "auto" }} alt="image not found" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="services2-img mb-30">
                        <Image src={DetailsImg4} style={{ width: "100%", height: "auto" }} alt="image not found" />
                    </div>
                </div>
            </div>
            <div className="services2-details-text">
                <p>Pleasure and praising pain was born and I will give you a complete account of the
                    system, and expound the actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again
                    is there anyone who loves or pursues or desires to obtain pain of itself,
                    because it is pain, but because occasionally circumstances occur in which toil
                    and pain can procure him some </p>
            </div> */}
        </div>
    );
};

export default ServiceDetailsContent;