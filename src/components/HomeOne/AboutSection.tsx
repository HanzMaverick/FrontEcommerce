"use client";
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import aboutImg from '../../../public/assets/img/about/1.png';
import aboutImg2 from '../../../public/assets/img/bg/about.png';
import { responseType } from '../../../types/response';
import { useAbout } from '../../../api/getAbout';
import { About } from '@/interFace/interFace';

const AboutSection = () => {
    const { loading, result }: responseType = useAbout();
    console .log(result);
    if (loading) {
        return <p>Loading...</p>;
    }

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
                            <h1>Bienvenido a <br /> {result?.attributes.Title}</h1>
                            <span>{result?.attributes.phrase}</span>
                            <p>{result?.attributes.About_Us}</p>
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
