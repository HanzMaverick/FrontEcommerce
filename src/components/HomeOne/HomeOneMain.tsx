import React from 'react';
import HeroSliderOne from '../Elements/HeroSlider/HeroSliderOne';
import AboutSection from './AboutSection';
import FutureSection from './FutureSection';
import CtaSection from './CtaSection';
import ChooseUsSection from './ChooseUsSection';
import CounterSection from './CounterSection';
import TestimonialSlider from '../Elements/Testimonial/TestimonialSlider';
import BlogSection from './BlogSection';
import dynamic from 'next/dynamic';
import Preloader from '../common/Preloader';
const ProductSection = dynamic(() => import('../Elements/FilterProduct/ProductSection'), {
    ssr: false
})

const HomeOneMain = () => {
    return (
        <>
            <HeroSliderOne />
            <AboutSection />
            <FutureSection />
            <ProductSection />
            <CtaSection />
            <ChooseUsSection />
            <CounterSection />
            <TestimonialSlider />
            <BlogSection />
        </>
    );
};

export default HomeOneMain;