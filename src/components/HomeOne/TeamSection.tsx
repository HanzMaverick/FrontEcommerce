import React from 'react';
import shape1 from '../../../public/assets/img/shape/sp2.png';
import shape2 from '../../../public/assets/img/shape/sp1.png';
import shape3 from '../../../public/assets/img/shape/sp3.png';
import shape4 from '../../../public/assets/img/shape/sp4.png';
import shape5 from '../../../public/assets/img/shape/1.png';
import Image from 'next/image';
import team_data from '@/data/team-data';
import SocialIcon from '@/layout/footer/social-icon';
import Link from 'next/link';

const TeamSection = () => {
    return (
        <div className="team-area pb-90 pos-relative">
            <div className="shape sp1 bounce-animate">
                <Image src={shape1} style={{ width: "auto", height: "auto" }} alt="image not found" />
            </div>
            <div className="shape sp2 bounce-animate">
                <Image src={shape2} style={{ width: "auto", height: "auto" }} alt="image not found" />
            </div>
            <div className="shape sp3 bounce-animate">
                <Image src={shape3} style={{ width: "auto", height: "auto" }} alt="image not found" />
            </div>
            <div className="shape sp4 bounce-animate">
                <Image src={shape4} style={{ width: "auto", height: "auto" }} alt="image not found" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title text-center section-circle mb-70">
                            <div className="section-img">
                                <Image src={shape5} style={{ width: "auto", height: "auto" }} alt="image not found" />
                            </div>
                            <h1>Zomata Farmer</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt
                                ut
                                labore et dolore magna aliqua enim minim veniam
                            </p>
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

export default TeamSection;