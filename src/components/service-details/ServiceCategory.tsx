import Link from 'next/link';
import React from 'react';

const ServiceCategory = () => {
    return (
        <ul className="services-link">
            <li><Link href="#"><i className='fas fa-angle-right'></i> Organic Vegetables</Link>
            </li>
            <li><Link href="#"><i className='fas fa-angle-right'></i> Full Of
                Vitamins</Link></li>
            <li><Link href="#"><i className='fas fa-angle-right'></i> Fresh
                Milk & Meat</Link></li>
            <li><Link href="#"><i className='fas fa-angle-right'></i> Organic Seeds</Link>
            </li>
            <li><Link href="#"><i className='fas fa-angle-right'></i> Organic Fruits</Link>
            </li>
            <li><Link href="#"><i className='fas fa-angle-right'></i> Corporate
                Design</Link></li>
        </ul>
    );
};

export default ServiceCategory;