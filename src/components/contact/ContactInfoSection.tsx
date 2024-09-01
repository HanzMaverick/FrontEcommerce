import React from 'react';
import shapeOne from '../../../public/assets/img/shape/c.png';
import Image from 'next/image';
import Link from 'next/link';

const ContactInfoSection = () => {
    return (
        <div className="contact-address-area pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="contact-address-wrapper mb-30">
                            <div className="contact-address-title">
                                <h2>London</h2>
                                <div className="contact-address-img">
                                    <Image src={shapeOne} style={{ width: "auto", height: 'auto' }} alt="image not found" />
                                </div>
                            </div>
                            <ul className="contact-link">
                                <li>
                                    <Link href="#">82 Bernie Greens Apt. 210, <br /> Hendon Way, London, UK</Link>

                                </li>
                                <li>
                                    <Link href="mailto:zomata@example.com" target='_blank'>
                                        zomata@example.com
                                    </Link>
                                </li>

                                <li>
                                    <Link href="tel:+15852826349">+15 852 826 349</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="contact-address-wrapper mb-30">
                            <div className="contact-address-title">
                                <h2>New York</h2>
                                <div className="contact-address-img">
                                    <Image src={shapeOne} style={{ width: "auto", height: 'auto' }} alt="image not found" />
                                </div>
                            </div>
                            <ul className="contact-link">
                                <li>
                                    <Link href="#">82 Bernie Greens Apt. 210, <br /> Hendon Way, London, UK</Link>

                                </li>
                                <li>
                                    <Link href="mailto:zomata@example.com" target='_blank'>
                                        zomata@example.com
                                    </Link>
                                </li>

                                <li>
                                    <Link href="tel:+15852826349">+15 852 826 349</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="contact-address-wrapper mb-30">
                            <div className="contact-address-title">
                                <h2>Paris</h2>
                                <div className="contact-address-img">
                                    <Image src={shapeOne} style={{ width: "auto", height: 'auto' }} alt="image not found" />
                                </div>
                            </div>
                            <ul className="contact-link">
                                <li>
                                    <Link href="#">82 Bernie Greens Apt. 210, <br /> Hendon Way, London, UK</Link>

                                </li>
                                <li>
                                    <Link href="mailto:zomata@example.com" target='_blank'>
                                        zomata@example.com
                                    </Link>
                                </li>

                                <li>
                                    <Link href="tel:+15852826349">+15 852 826 349</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoSection;