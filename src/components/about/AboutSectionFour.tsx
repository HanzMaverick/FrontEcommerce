"use client";
import Image from 'next/image';
import React from 'react';
import { useAbout } from '../../../api/getAbout';
import { responseType } from '../../../types/response';

const AboutSectionFour = () => {
    const { loading, result }: responseType = useAbout();
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
                            {result?.attributes.About_Secundario && (
                                <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${result?.attributes.About_Secundario.data.attributes.url}`}
                                alt={result?.attributes.nameCategory}
                                width={500}
                                height={525}
                                className="category-image"
                            />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionFour;