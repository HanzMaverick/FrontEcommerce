import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactInfoSection from './ContactInfoSection';
import ContactForm from '@/form/contact-form';
import MapSection from './MapSection';

const ContactMainArea = () => {
    return (
        <>
            <Breadcrumb title='Contact Us' subTitle='Contact Us' />
            <ContactInfoSection />
            <ContactForm />
            <MapSection />
        </>
    );
};

export default ContactMainArea;