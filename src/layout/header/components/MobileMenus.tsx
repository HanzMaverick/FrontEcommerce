import React from 'react';
import Menus from './Menus';
import useGlobalContext from '@/hooks/use-context';
import MenuResponsive from './MenuResponsive';

const MobileMenus = () => {
    const { toggleSideMenu, sideMenuOpen } = useGlobalContext();
    return (
        <div className={sideMenuOpen ? "side-mobile-menu d-block d-xl-done d-lg-none open" : "side-mobile-menu d-block d-xl-done d-lg-none"}>
            <div className="close-mobile-menu" onClick={toggleSideMenu}>
                <span><i className='fas fa-times'></i></span>
            </div>
            <div className="mm-menu">
                <ul>
                    <MenuResponsive/>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenus;