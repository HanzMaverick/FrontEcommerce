import React from 'react';
import SocialIcon from '../footer/social-icon';
import Link from 'next/link';

const TopHeaderTwo = () => {

    return (
        <div className="header-area header-2 d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-9">
                        <div className="header-wrapper">
                            <div className="header-text">
                                <span>
                                    <i className='far fa-map'> </i>
                                    <Link href='#'>
                                        504 White St . Dawsonville, GA 30534 , New York
                                    </Link>
                                </span>
                                <span>
                                    <i className='far fa-envelope'> </i>
                                    <Link href="mailto:suport@gmail.com">
                                        suport@gmail.com
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

export default TopHeaderTwo;