import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/assets/img/logo/white.png';
import shape1 from '../../../public/assets/img/shape/f.png';
import footerBgImg from '../../../public/assets/img/bg/bg6.jpg';
import Image from 'next/image';
import SocialIcon from './social-icon';
import CopyRightArea from './copyright-area';

const Footer = () => {
    return (
        <footer>
            <div className="footer-area pt-200" style={{ backgroundImage: `url(${footerBgImg.src})` }}>
                <div className="container">
                    <div className="footer-bg pb-50">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper mb-30">
                                    <div className="footer-logo">
                                        <Link href="/"><Image src={Logo} style={{ width: "auto", height: "auto" }} alt="image not found" /></Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor amet cons adipisicing elit sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip.</p>
                                    </div>
                                    <SocialIcon WrapperClass='footer-icon' />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper pl-45 mb-30">
                                    <div className="footer-title">
                                        <h4>Customer Support</h4>
                                        <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                    <ul className="fotter-menu">
                                        <li><Link href="/contact">Help and Ordering</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/service">Return &amp; Cancellation</Link></li>
                                        <li><Link href="/contact">Delevery Schedule</Link></li>
                                        <li><Link href="/contact">Get a Call</Link></li>
                                        <li><Link href="/service">Online Enquiry</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper pl-45 mb-30">
                                    <div className="footer-title">
                                        <h4>Contact Info</h4>
                                        <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                    <ul className="fotter-link">
                                        <li>
                                            <i className='fas fa-paper-plane'></i>
                                            <span className='zomata-contact'>
                                                <Link href="#">205 Olazu Familia, Herba Street Front USA</Link>
                                            </span>
                                        </li>
                                        <li>
                                            <i className='fas fa-envelope-open'></i>
                                            <span className='zomata-contact'> <Link href="mailto:zomatainfo@gmail.com">
                                                zomatainfo@gmail.com
                                            </Link></span>

                                        </li>
                                        <li>
                                            <i className='fas fa-headphones'></i>
                                            <span className='zomata-contact'> <Link href="tel:+53684956245">+(536) 84 95 62 45</Link> </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-wrapper pl-40 mb-30">
                                    <div className="footer-title">
                                        <h4>Newsletters</h4>
                                        <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                    </div>
                                    <div className="footer-content">
                                        <p>Enter your email and we’ll send you latest information plans.</p>
                                    </div>
                                    <div className="subscribes-form">
                                        <div className="form-wrap">
                                            <input type="email" placeholder="Enter your emaill" />
                                            <button className="btn">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CopyRightArea />
                </div>
            </div>
        </footer>
    );
};

export default Footer;