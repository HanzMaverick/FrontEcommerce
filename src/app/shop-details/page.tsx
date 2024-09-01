import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 3;
    return (
        <Wrapper>
            <main>
                <ShopDetailsMain id={id} />
            </main>
        </Wrapper>
    );
};

export default page;