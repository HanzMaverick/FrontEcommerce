import WishlistMain from '@/components/wishlist/WishlistMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <WishlistMain />
            </main>
        </Wrapper>
    );
};

export default page;