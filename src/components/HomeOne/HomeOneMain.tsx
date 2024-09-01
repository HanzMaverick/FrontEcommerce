import React from 'react';
import HeroSliderOne from '../Elements/HeroSlider/HeroSliderOne';
import AboutSection from './AboutSection';
import FutureSection from './FutureSection';
import CtaSection from './CtaSection';
import ChooseUsSection from './ChooseUsSection';
import GallerySection from './GallerySection';
import TeamSection from './TeamSection';
import CounterSection from './CounterSection';
import TestimonialSlider from '../Elements/Testimonial/TestimonialSlider';
import BlogSection from './BlogSection';
import BrandSection from '../Elements/brand/BrandSection';
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
            <GallerySection />
            <TeamSection />
            <CounterSection />
            <TestimonialSlider />
            <BlogSection />
            <BrandSection />
        </>
    );
};

export default HomeOneMain;