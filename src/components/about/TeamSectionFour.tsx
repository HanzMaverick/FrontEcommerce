import Image from 'next/image';
import React from 'react';
import shapeOne from '../../../public/assets/img/shape/1.png';
import Link from 'next/link';
import team_data from '@/data/team-data';
import SocialIcon from '@/layout/footer/social-icon';

const TeamSectionFour = () => {
    return (
        <div className="team-area gray2-bg pt-110 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={shapeOne} style={{ width: "auto", height: "auto" }} alt='image not found' />
                            </div>
                            <h1>Zomata Farmer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor
                                incididunt ut labore et dolore magna aliqua enim minim veniam</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        team_data.slice(0, 4).map((item) => (
                            <div className="col-xl-3 col-lg-3 col-md-6" key={item.id}>
                                <div className="team-wrapper text-center mb-30">
                                    <div className="team-img">
                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                        <SocialIcon WrapperClass='team-icon' />
                                    </div>
                                    <div className="team-text">
                                        <Link href={`/team-details/${item.id}`}>
                                            <h4>{item.authorName}</h4>
                                        </Link>
                                        <span>{item.destination}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamSectionFour;