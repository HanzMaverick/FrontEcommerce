"use client";
import Image from 'next/image';
import React from 'react';
import aboutImg from '../../../public/assets/img/about/2.jpg';
import { useAbout } from '../../../api/getAbout';
import { responseType } from '../../../types/response';

const AboutSectionFour = () => {
    const { loading, result }: responseType = useAbout();
    console .log(result);
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="about-us-area about-shape pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-info mb-30">
                            <h1>Bienvenido a <br /> {result?.attributes.Title}</h1>
                            <span>{result?.attributes.phrase}</span>
                            <p>{result?.attributes.About_Us}</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img mb-30">
                            <Image src={aboutImg} style={{ width: "100%", height: "auto" }} alt='image not found' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionFour;