"use client"
import Link from 'next/link';
import React from 'react';
import ShapeOne from '../../../public/assets/img/shape/1.png';
import Image from 'next/image';
import gallary_data from '@/data/gallary-data';
import { PhotoProvider, PhotoView } from "react-photo-view";

const GallerySection = () => {
    return (
        <div className="gallery-area pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={ShapeOne} style={{ width: "auto", height: "auto" }} alt="image not found" />
                            </div>
                            <h1>Zomata Gallery</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt
                                ut
                                labore et dolore magna aliqua enim minim veniam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <PhotoProvider
                        speed={() => 800}
                        easing={(type) =>
                            type === 2
                                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                        }
                    >
                        {
                            gallary_data.slice(0, 8).map((item) => (
                                <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                    <div className="gallery-wrapper mb-30">
                                        <div className="gallery-img">
                                            <Link href={`/gallery-details-1/${item.id}`}>
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </Link>
                                            <div className="gallery-icon">
                                                <PhotoView src={item.image.src}>
                                                    <Link href="#" className="popup-image"><i className={item.icon}></i></Link>
                                                </PhotoView>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </PhotoProvider>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;