import React from 'react';
import Link from 'next/link';
import bgImage from '../../../../public/assets/img/bg/bg15.jpg';

interface PropsData {
    title: string | undefined,
    subTitle: string | undefined
}

const Breadcrumb = ({ title, subTitle }: PropsData) => {
    return (
        <>
            <div className="breadcrumb-area pt-160 pb-170" style={{ backgroundImage: `url(${bgImage.src})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-text text-center">
                                <h1>{title}</h1>
                                <ul className="breadcrumb-menu">
                                    <li><Link href="/">Home</Link></li>
                                    <li><i className='fas fa-chevron-right'></i></li>
                                    <li><span>{subTitle}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;