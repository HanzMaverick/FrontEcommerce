import ServiceDetailsMain from '@/components/service-details/ServiceDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <ServiceDetailsMain />
            </main>
        </Wrapper>
    );
};

export default page;