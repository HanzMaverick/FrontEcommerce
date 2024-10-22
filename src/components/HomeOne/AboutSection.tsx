"use client";
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { responseType } from '../../../types/response';
import { useAbout } from '../../../api/getAbout';

const AboutSection = () => {
    const { loading, result }: responseType = useAbout();
    console .log(result);
    if (loading) {
        return <p>Loading...</p>;
    }

    const backgroundImageUrl = result?.attributes.About_Principal 
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.attributes.About_Principal.data.attributes.url}` 
                    : '';

    const product = result?.attributes.image 
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${result.attributes.image.data.attributes.url}` 
                    : '';

    return (
        <div 
        className="about-us-area pt-115 pb-90" 
        style={{ 
            backgroundImage: `url(${backgroundImageUrl})`, 
            backgroundPosition: 'center', 
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div 
                        className="about-us-img mb-30">
                            <img 
                            src={product} 
                            alt="About" 
                            className="category-image" 
                            style={{ 
                                borderRadius: '10px', 
                                width: '100%', 
                                height: '100%', 
                            }} />
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
