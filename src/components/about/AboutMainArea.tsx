"use client";
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutSectionFour from './AboutSectionFour';
import FaqSection from '../HomeThree/FaqSection';
import ServiceSectionTwo from '../HomeTwo/ServiceSectionTwo';
import TeamSectionFour from './TeamSectionFour';
import TestimonialSliderTwo from '../Elements/Testimonial/TestimonialSliderTwo';
import BrandSection from '../Elements/brand/BrandSection';

const AboutMainArea = () => {
    return (
        <>
            <Breadcrumb title='About Us' subTitle='About Us' />
            <AboutSectionFour />
            <FaqSection />
            <ServiceSectionTwo />
            <TeamSectionFour />
            <TestimonialSliderTwo />
        </>
    );
};

export default AboutMainArea;