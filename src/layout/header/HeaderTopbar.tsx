import Link from 'next/link';
import React from 'react';
import SocialIcon from '../footer/social-icon';


const TopHeader = () => {

    return (
        <div className="header-area d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-9">
                        <div className="header-wrapper">
                            <div className="header-text">
                                <span>
                                    <i className='far fa-map'> </i>
                                    <Link href='#'>
                                        Quetzaltenango, Guatemala
                                    </Link>
                                </span>
                                <span>
                                    <i className='far fa-envelope'> </i>
                                    <Link href="mailto:suport@gmail.com" target='_blank'>
                                        whackhealthy@gmail.com
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-3">
                        <SocialIcon WrapperClass='header-icon text-md-right' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
